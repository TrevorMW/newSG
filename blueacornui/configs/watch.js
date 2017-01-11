/**
* @package     BlueAcorn/GreenPistachio
* @version     4.1.0
* @author      Blue Acorn, Inc. <code@blueacorn.com>
* @copyright   Copyright © 2016 Blue Acorn, Inc.
*/

'use strict';

var combo  = require('./combo'),
    themes = require('./themes'),
    options = require('./options'),
    path   = require('./path'),
    _      = require('underscore');

var themeOptions = {};

_.each(themes, function(theme, name) {
    if(theme.grunt) {
        themeOptions[name + 'dev'] = {
            files: [
                combo.watchFiles(name)
            ],
            tasks: ['css', 'js'],
            options: {
                sourceMap: true
            }
        };

        themeOptions[name + 'server'] = {
            files: path.serverFiles,
            tasks: ['dwupload'],
            options: {
                livereload: true,
                spawn: false
            }
        };

    }
});

var watchOptions = {

};

module.exports = _.extend(themeOptions, watchOptions);
