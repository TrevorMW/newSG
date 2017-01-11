/**
 * @package     Blueacorn/Utilities
 * @version     1.0
 * @author      Blue Acorn <code@blueacorn.com>
 * @copyright   Copyright © 2016 Blue Acorn.
 *
 * @todo create dynamic utility to create new methods that are automatically attached to BA. Do I need to?
 */

(function (root, factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory());
    }

}(this, function () {
    'use strict';

    /**
     *  String#truncate([length = 30[, suffix = '...']]) -> String
     *
     *  Truncates a string to given `length` and appends `suffix` to it (indicating
     *  that it is only an excerpt).
     *
     *  ##### Examples
     *
     *      'A random sentence whose length exceeds 30 characters.'.truncate();
     *      // -> 'A random sentence whose len...'
     *
     *      'Some random text'.truncate();
     *      // -> 'Some random text.'
     *
     *      'Some random text'.truncate(10);
     *      // -> 'Some ra...'
     *
     *      'Some random text'.truncate(10, ' [...]');
     *      // -> 'Some [...]'
     **/
    if(typeof String.truncate !== 'function'){
        String.prototype.truncate = function (length, truncation) {
            length = length || 30;
            truncation = typeof truncation === "undefined" ? '...' : truncation;
            return this.length > length ? this.substring(0, length) + truncation : this;
        };
    }

    /**
     *  RegExp.escape(str) -> String
     *  - str (String): A string intended to be used in a `RegExp` constructor.
     *
     *  Escapes any characters in the string that have special meaning in a
     *  regular expression.
     *
     *  Use before passing a string into the `RegExp` constructor.
     */
    if(typeof RegExp.escape !== 'function'){
        RegExp.escape = function(str) {
            return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
        };
    }


    /**
     *  String#strip() -> String
     *
     *  Strips all leading and trailing whitespace from a string.
     *
     *  ##### Example
     *
     *      '    hello world!    '.strip();
     *      // -> 'hello world!'
     **/
    if(typeof String.strip !== 'function'){
        String.prototype.strip = function () {
            return this.replace(/^\s+/, '').replace(/\s+$/, '');
        };
    }

    /**
     *  String#format() -> String
     **/
    if(typeof String.format !== 'function'){
        String.prototype.format = function () {
    		var s = arguments[0];
    		var i, len = arguments.length - 1;
    		for (i = 0; i < len; i++) {
    			var reg = new RegExp('\\{' + i + '\\}', 'gm');
    			s = s.replace(reg, arguments[i + 1]);
    		}
    		return s;
    	};
    }

    /**
     * Add core utility methods here,
     * will traverse down to all BA modules.
     *
     * To access use ba.utils
     */
    var utils = {};

    return utils;
}));
