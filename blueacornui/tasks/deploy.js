/**
 * @package     BlueAcorn/GreenPistachio
 * @version     4.1.0
 * @author      Blue Acorn, Inc. <code@blueacorn.com>
 * @copyright   Copyright © 2016 Blue Acorn, Inc.
 */

module.exports = function(grunt) {
    'use strict';

    var path = require('path'),
        paths = require('../configs/path'),
        themes = require('../configs/themes'),
        combo = require('../configs/combo'),
        options = require('../configs/options');

    grunt.registerTask('deploy', 'Deployment Mechanism', function() {
        paths.uploadFiles = grunt.file.expand(paths.webroot + options.folder);
        grunt.task.run('dwupload');
    });
};
