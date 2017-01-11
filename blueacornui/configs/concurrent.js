/**
* @package     BlueAcorn/GreenPistachio
* @version     4.1.0
* @author      Blue Acorn, Inc. <code@blueacorn.com>
* @copyright   Copyright © 2016 Blue Acorn, Inc.
*/

'use strict';

var themes = require('./themes'),
    options = require('./options'),
    _ = require('underscore');

var grunt = require('grunt');

var themeOptions = {};

_.each(themes, function(theme, name) {
    if(theme.grunt) {
        themeOptions[name + 'dev'] = {
            tasks: ['watch:' + name + options.env],
            options: {
                logConcurrentOutput: true
            }
        };

        themeOptions[name + 'css'] = {
            tasks: ['sass:' + name + options.env],
            options: {
                logConcurrentOutput: true
            }
        };

        themeOptions[name + 'cssCompile'] = {
            tasks: ['sass:' + name + 'dev', 'postcss:' + name + 'dev'],
            options: {
                logConcurrentOutput: true
            }
        };
    }
});

module.exports = themeOptions;

