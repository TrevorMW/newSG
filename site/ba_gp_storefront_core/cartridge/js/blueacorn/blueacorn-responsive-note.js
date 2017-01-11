/**
 * @package     Blueacorn\ResponsiveNotation
 * @version     2.0
 * @author      Blue Acorn <code@blueacorn.com>
 * @copyright   Copyright © 2016 Blue Acorn.
 */

(function (root, factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(window.jQuery, require('./blueacorn-core'), require('../vendor/enquire/enquire.min'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'baCore', 'enquireJs'], function (jquery, ba, enquire) {
            return (factory(jquery, ba, enquire));
        });
    } else {
        // Global Variables
        root.ba.responsiveNotation = factory(root.jQuery, root.ba, root.enquire);
    }

}(this, function ($, ba, enquire) {
    'use strict';

    var responsiveNotation =  {

        settings: {
            'moduleName' : 'ResponsiveNotation',
            'mobileClass': 'resp-mobile',
            'tabletClass': 'resp-tablet',
            'desktopClass': 'resp-desktop'
        },

        init: function (options) {

            // Overrides the default settings
            ba.overrideSettings(this.settings, options);

            // Start the debugger
            ba.setupDebugging(this.settings);

            // Fire document event incase you need to observer rNote being loaded before you load something else.
            $(document).trigger('rnote:loaded');

            // Setup Enquire Observers to Change Class Based on
            this.setViewportClass();
        },

        setViewportClass: function(){
            var self = this,
                html = $('html');

            enquire.register('screen and (min-width:' + ba.bp.large + 'px)', {
                match: function() {
                    $('html').addClass(self.settings.desktopClass);
                },
                unmatch: function() {
                    $('html').removeClass(self.settings.desktopClass);
                }
            }).register('screen and (min-width:' + ba.bp.xsmall + 'px) and (max-width:' + ba.bp.large + 'px)', {
                match: function() {
                    $('html').addClass(self.settings.tabletClass);
                },
                unmatch: function() {
                    $('html').removeClass(self.settings.tabletClass);
                }
            }).register('screen and (max-width:' + ba.bp.xsmall + 'px)', {
                match: function() {
                    $('html').addClass(self.settings.mobileClass);
                },
                unmatch: function() {
                    $('html').removeClass(self.settings.mobileClass);
                }
            });
        }
    };

    $(document).on("baCoreReady", function() {

        /**
         * The parameter object is optional.
         * Must be an object.
         */
        responsiveNotation.init();
    });

    return responsiveNotation;
}));