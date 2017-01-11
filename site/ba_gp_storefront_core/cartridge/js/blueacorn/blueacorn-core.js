/**
 * @package     Blueacorn/Core
 * @version     1.0
 * @author      Blue Acorn <code@blueacorn.com>
 * @copyright   Copyright © 2016 Blue Acorn.
 *
 * @todo Be able to convert this into a simpler JS template.
 * @todo comment parsing?
 * @todo better naming convention
 */

(function (root, factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(window.jQuery, require('../vendor/requirejs/domReady'), require('./blueacorn-utils'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'domReady', 'baUtils'], function (jquery, domReady, baUtils) {
            return (factory(jquery, domReady, baUtils));
        });
    } else {
        // Global Variables
        root.ba = factory(root.jQuery, root.domReady);
    }

}(this, function ($, domReady, utils) {
    'use strict';

    var blueAcornCore = {
        utils: utils,
        config: {},

        settings: {
            debug: false,
            moduleName : 'blueAcornCore'
        },

        bp: {
            xxsmall: 320,
            xsmall: 480,
            small: 640,
            medium: 768,
            large: 1024,
            xlarge: 1440
        },

        init: function (options) {

            // Overrides the default settings
            this.overrideSettings(this.settings, options);

            // Overrides the default BP settings since M1 has them globally
            if(typeof window.bp !== "undefined"){
                this.overrideSettings(this.bp, window.bp);
            }

            // Start the debugger
            if (this.settings.debug === true || this.config["styleguide/development/enable_development"] === true) {
                this.setupDebugging(this.settings);
            }

            this.triggerCustomEvent();
        },

        /**
         * Takes default settings in object scope, and
         * merges the optional object passed in on initiation
         * of the class.
         */
        overrideSettings: function (settings, options) {
            if (typeof options === 'object') {
                settings = jQuery.extend(settings, options);
            }
        },

        setupDebugging: function (moduleSettings) {
            if(typeof moduleSettings === 'object'){
                this.watchConsole(moduleSettings.moduleName + ' Loaded!!!');
                this.watchConsole(moduleSettings);
            }
        },

        triggerCustomEvent: function() {
            $(document).trigger('baCoreReady');
        },

        /**
         * Checks if the specified jQuery element exists.
         *
         * If regular HTML element is passed, will change into
         * jQuery selector for use in this function.
         *
         * @param $element - jQuery object
         * @returns {boolean}
         */
        checkForElement: function($element){
            if(!($element instanceof jQuery)){
                $element = jQuery($element);
            }
            return $element.length >= 1;
        },

        /**
         * Adds console log if degubbing is true
         * @param string
         */
        watchConsole: function (message) {
            if(!$('.ie6, .ie7, .ie8, .ie9').length && typeof console !== "undefined" && (this.settings.debug || this.config["styleguide/development/enable_development"])) {
                console.log(message); 
            }
        },

        /**
         * Returns a function that will only be triggered once, after inactivity of (wait) ms
         * Ported from: http://underscorejs.org/docs/underscore.html
         *
         * @param func
         * @param wait
         * @param immediate
         * @returns {Function}
         */
        debounce: function (func, wait, immediate) {
            var timeout;

            return function() {
                var context = this,
                    args = arguments;

                var later = function() {
                    timeout = null;

                    if (!immediate) {
                        func.apply(context, args);
                    }
                };

                if (immediate && !timeout) {
                    func.apply(context, args);
                }

                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }
    };

    if(typeof domReady === "function") {
        domReady(function () {

            /**
             * Since M1/M2 and DW defer in js config object names
             * we need to watch for both and and save them to the ba
             * object so we can use them regardless of platform
             */

            // M1 and M2
            if(typeof mageConfig !== "undefined" && typeof mageConfig === "object"){
                blueAcornCore.config = mageConfig;
            }

            // DW
            if(typeof SitePreferences !== "undefined" && typeof SitePreferences === "object"){
                blueAcornCore.config = SitePreferences;
            }

            /**
             * Launch BA into outerspace
             */
            blueAcornCore.init();
        });
    }

    return blueAcornCore;
}));
