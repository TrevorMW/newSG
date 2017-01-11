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
        combo = require('../configs/combo'),
        themes = require('../configs/themes'),
        options = require('../configs/options');


    grunt.registerTask('compile', 'Theme Compilation', function() {
        _.each(themes, function(theme, name){
            if(theme.grunt) {
                grunt.task.run('concurrent:' + name + 'cssCompile');

                // Upload CSS files
                paths.uploadFiles = combo.cssFiles(name);
                grunt.task.run('dwupload');
            }
        });

        grunt.task.run('js');
    });
};
