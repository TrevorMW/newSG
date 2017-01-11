/**
* @package     BlueAcorn/GreenPistachio
* @version     4.1.0
* @author      Blue Acorn, Inc. <code@blueacorn.com>
* @copyright   Copyright © 2016 Blue Acorn, Inc.
*/

'use strict';

var combo  = require('./combo'),
    themes = require('./themes'),
    _      = require('underscore');

var themeOptions = {};

_.each(themes, function(theme, name) {
    if(theme.grunt) {
        themeOptions[name + 'dev'] = {
            options: {
                sourceMap: true,
                outFile: 'style.css',
                includePaths: combo.themeFallback(name)
            },
            files: combo.scssFiles(name)
        };

        themeOptions[name + 'staging'] = {
            options: {
                sourceMap: false,
                outputStyle: 'compact',
                includePaths: combo.themeFallback(name)
            },
            files: combo.scssFiles(name)
        };

        themeOptions[name + 'styleguide'] = {
            files: [{
                'styleguide/dist/main.css': 'styleguide/scss/main.scss'
            }]
        };
    }
});

var sassOptions = {
    options: {
        sourceComments: false,
        precision: 4,
        outputStyle: 'nested'
    }
};

module.exports = _.extend(themeOptions, sassOptions);
