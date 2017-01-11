/**
 * @package     BlueAcorn/GreenPistachio
 * @version     4.1.0
 * @author      Blue Acorn, Inc. <code@blueacorn.com>
 * @copyright   Copyright © 2016 Blue Acorn, Inc.
 */

module.exports = function(grunt) {
    'use strict';

    var _ = require('lodash'),
        Promise = require("bluebird"),
        path = require('path'),
        paths = require('../configs/path'),
        themes = require('../configs/themes'),
        options = require('../configs/options'),
        dwdav = require('ba-dwdav'),
        configReader = require('@tridnguyen/config');

    // Changed files function
    var changedFiles = Object.create(null);
    var onChange = grunt.util._.debounce(function() {
        paths.uploadFiles = Object.keys(changedFiles);
        changedFiles = Object.create(null);
    }, 200);

    grunt.registerTask('dwupload', 'webDav uploader for Demandware', function() {
        var done = this.async();
        var gruntOptions = this.options({ authFile: paths.dwJson });
        var authFile = path.resolve(gruntOptions.authFile);
        var credentials = _.extend(configReader(authFile, {caller: false, verbose: true}), options);
        var server = dwdav(credentials);
        var promises = [];

        grunt.log.ok('Loaded auth credentials from: ' + authFile);

        _.forEach(paths.uploadFiles, function(value) {
            grunt.log.ok('Uploading ' + value);
            promises.push(server.post(value));
        });

        Promise.all(promises).then(function() {
            done(0);
        }).catch(function(err) {
            grunt.log.error(err)
        });

    });

    grunt.event.on('watch', function(action, filepath) {
        changedFiles[filepath] = action;
        onChange();
    });
};
