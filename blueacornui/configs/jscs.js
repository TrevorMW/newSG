/**
 * @package     BlueAcorn/GreenPistachio
 * @version     4.1.0
 * @author      Blue Acorn, Inc. <code@blueacorn.com>
 * @copyright   Copyright © 2016 Blue Acorn, Inc.
 */

'use strict';

var combo  = require('./combo'),
    themes = require('./themes'),
    paths = require('./path'),
    _      = require('underscore');

var themeOptions = {};

_.each(themes, function(theme, name) {
    if(theme.grunt) {
        themeOptions[name] = {
            src: paths.webroot + '/**/*.js',
            options: {
                config: './.jscsrc'
            }
        };
    }
});

module.exports = themeOptions;
