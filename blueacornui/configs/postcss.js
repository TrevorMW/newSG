/**
* @package     BlueAcorn/GreenPistachio
* @version     4.1.0
* @author      Blue Acorn, Inc. <code@blueacorn.com>
* @copyright   Copyright © 2016 Blue Acorn, Inc.
*/

'use strict';

var combo  = require('./combo'),
    themes = require('./themes'),
    _      = require('underscore'),
    ap = require('./autoprefixer');

var themeOptions = {};

_.each(themes, function(theme, name) {
    if(theme.grunt) {
        themeOptions[name + 'dev'] = {
            options: {
                map: ap.dev.map,
                processors: [
                    require('autoprefixer')({
                        browsers: ap.dev.options.browsers,
                        map: ap.dev.options.map,
                        add: true,
                        remove: true
                    })
                ]
            },
            src: combo.cssFiles(name)
        };

        themeOptions[name + 'staging'] = {
            options: {
                map: ap.production.map,
                processors: [
                    require('autoprefixer')({
                        browsers: ap.production.options.browsers,
                        add: true,
                        remove: true
                    })
                ]
            },
            src: combo.cssFiles(name)
        };
    }
});

var postCssOptions = {

};

module.exports = _.extend(themeOptions, postCssOptions);
