(function(root, factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory());
    } else {
        // Global Variables
        // Overwrites PrototypeJs if exists as well
        root.Class = factory();
    }

})(this, function(){
    "use strict"; // Comply to ES5 standards

    /**
     *  Class.create([superclass][, methods...]) -> Class
     *    - superclass (Class): The optional superclass to inherit methods from.
     *    - methods (Object): An object whose properties will be "mixed-in" to the
     *        new class. Any number of mixins can be added; later mixins take
     *        precedence.
     *
     *  [[Class.create]] creates a class and returns a constructor function for
     *  instances of the class. Calling the constructor function (typically as
     *  part of a `new` statement) will invoke the class's `initialize` method.
     *
     *  [[Class.create]] accepts two kinds of arguments. If the first argument is
     *  a [[Class]], it's used as the new class's superclass, and all its methods
     *  are inherited. Otherwise, any arguments passed are treated as objects,
     *  and their methods are copied over ("mixed in") as instance methods of the
     *  new class. In cases of method name overlap, later arguments take
     *  precedence over earlier arguments.
     *
     *  If a subclass overrides an instance method declared in a superclass, the
     *  subclass's method can still access the original method. To do so, declare
     *  the subclass's method as normal, but insert `$super` as the first
     *  argument. This makes `$super` available as a method for use within the
     *  function.
     *
     *  To extend a class after it has been defined, use [[Class#addMethods]].
     *
     *
     *  Class#addMethods(methods) -> Class
     *    - methods (Object): The methods to add to the class.
     *
     *  Adds methods to an existing class.
     *
     *  [[Class#addMethods]] is a method available on classes that have been
     *  defined with [[Class.create]]. It can be used to add new instance methods
     *  to that class, or overwrite existing methods, after the class has been
     *  defined.
     *
     *  New methods propagate down the inheritance chain. If the class has
     *  subclasses, those subclasses will receive the new methods &mdash; even in
     *  the context of `$super` calls. The new methods also propagate to instances
     *  of the class and of all its subclasses, even those that have already been
     *  instantiated.
     *
     *  ##### Examples
     *
     *      var Animal = Class.create({
     *        initialize: function(name, sound) {
     *          this.name  = name;
     *          this.sound = sound;
     *        },
     *
     *        speak: function() {
     *          alert(this.name + " says: " + this.sound + "!");
     *        }
     *      });
     *
     *      // subclassing Animal
     *      var Snake = Class.create(Animal, {
     *        initialize: function($super, name) {
     *          $super(name, 'hissssssssss');
     *        }
     *      });
     *
     *      var ringneck = new Snake("Ringneck");
     *      ringneck.speak();
     *
     *      //-> alerts "Ringneck says: hissssssss!"
     *
     *      // adding Snake#speak (with a supercall)
     *      Snake.addMethods({
     *        speak: function($super) {
     *          $super();
     *          alert("You should probably run. He looks really mad.");
     *        }
     *      });
     *
     *      ringneck.speak();
     *      //-> alerts "Ringneck says: hissssssss!"
     *      //-> alerts "You should probably run. He looks really mad."
     *
     *      // redefining Animal#speak
     *      Animal.addMethods({
     *        speak: function() {
     *          alert(this.name + 'snarls: ' + this.sound + '!');
     *        }
     *      });
     *
     *      ringneck.speak();
     *      //-> alerts "Ringneck snarls: hissssssss!"
     *      //-> alerts "You should probably run. He looks really mad."
     *
     *  For details, see the
     *  [inheritance tutorial](http://prototypejs.org/learn/class-inheritance)
     *  on the Prototype website.
     *
     **/

    var Class = (function() {

        function subclass() {}

        function update(array, args) {
            var arrayLength = array.length, length = args.length;
            while (length--) array[arrayLength + length] = args[length];
            return array;
        }

        function wrap(method, wrapper) {
            var __method = wrapper;
            return function() {
                var a = update([__method.bind(this)], arguments);
                return method.apply(this, a);
            }
        }

        function $A(iterable) {
            if (!iterable) return [];
            var length = iterable.length || 0, results = new Array(length);
            while (length--) results[length] = iterable[length];
            return results;
        }

        function argumentNames(string) {
            var names = string.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
                .replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '')
                .replace(/\s+/g, '').split(',');
            return names.length == 1 && !names[0] ? [] : names;
        }

        function create() {
            var parent = null, properties = $A(arguments);
            if (typeof properties[0] === "function")
                parent = properties.shift();

            function klass() {
                this.init.apply(this, arguments);
            }

            for (var property in Class.Methods)
                klass[property] = Class.Methods[property];

            klass.superclass = parent;
            klass.subclasses = [];

            if (parent) {
                subclass.prototype = parent.prototype;
                klass.prototype = new subclass;
                parent.subclasses.push(klass);
            }

            for (var i = 0, length = properties.length; i < length; i++)
                klass.addMethods(properties[i]);

            if (!klass.prototype.init)
                klass.prototype.init = function(){};

            klass.prototype.constructor = klass;
            return klass;
        }

        function addMethods(source) {
            var ancestor   = this.superclass && this.superclass.prototype,
                properties = Object.keys(source);

            for (var i = 0, length = properties.length; i < length; i++) {
                var property = properties[i], value = source[property];
                if (ancestor && typeof value === "function" &&
                    argumentNames(value)[0] == "$super") {
                    var method = value;
                    value = wrap(method, (function(m) {
                        return function() { return ancestor[m].apply(this, arguments); };
                    })(property));

                    value.valueOf = (function(method) {
                        return function() { return method.valueOf.call(method); };
                    })(method);

                    value.toString = (function(method) {
                        return function() { return method.toString.call(method); };
                    })(method);
                }
                this.prototype[property] = value;
            }

            return this;
        }

        return {
            create: create,
            Methods: {
                addMethods: addMethods
            }
        };
    })();

    return Class;
});