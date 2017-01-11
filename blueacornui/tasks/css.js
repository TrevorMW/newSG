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

    grunt.registerTask('css', 'SCSS Compilation', function() {
        if(arguments[0]) {
            grunt.task.run('sass:' + options.cartridge + options.compileType);
        } else {
            _.each(themes, function(theme, name){
                if(theme.grunt) {
                    grunt.task.run('concurrent:' + name + 'css');

                    // Upload CSS files
                    paths.uploadFiles = combo.cssFiles(name);
                    grunt.task.run('dwupload');
                }
            });
        }
    });
};
