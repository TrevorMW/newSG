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
        themes = require('./configs/themes'),
        options = require('./configs/options'),
        configDir = './configs',
        taskDir = './tasks';

    [
        'time-grunt',
        taskDir + '/compile',
        taskDir + '/css',
        taskDir + '/js',
        taskDir + '/dwupload',
        taskDir + '/dav',
        taskDir + '/qc'
    ].forEach(function (task) {
        require(task)(grunt);
    });

    require('load-grunt-config')(grunt, {
        configPath: path.join(__dirname, configDir),
        init: true,
        jitGrunt: {
            staticMappings: {
                usebanner: 'grunt-banner',
                compress: 'grunt-contrib-compress'
            }
        }
    });

    _.each({

        default: function() {
            grunt.task.run('sass:' + options.cartridge + options.env);
            grunt.task.run('browserify:' + options.cartridge + options.env);
            grunt.task.run('concurrent:' + options.cartridge + options.env);
        },

        setup: function() {
            grunt.task.run('shell:setup');
            grunt.task.run('compile');
        }

    }, function(task, name) {
        grunt.registerTask(name, name, task);
    });

};
