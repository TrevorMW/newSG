/**
 * @package     BlueAcorn/GreenPistachio
 * @version     4.1.0
 * @author      Blue Acorn, Inc. <code@blueacorn.com>
 * @copyright   Copyright © 2016 Blue Acorn, Inc.
 */

module.exports = function(grunt) {
    'use strict';

    var _ = require('underscore'),
        path = require('path'),
        paths = require('../configs/path'),
        themes = require('../configs/themes'),
        combo = require('../configs/combo'),
        options = require('../configs/options');

    grunt.registerTask('js', 'JS Compilation', function() {
        if(arguments[0]) {
            grunt.task.run('browserify:' + options.cartridge + options.compileType);
        } else {
            _.each(themes, function(theme, name){
                if(theme.grunt) {
                    grunt.task.run('browserify:' + name + 'dev');

                    // Upload JS files
                    paths.uploadFiles = _.pluck(combo.jsFiles(name), 'dest');
                    grunt.task.run('dwupload');
                }
            });
        }
    });
};
