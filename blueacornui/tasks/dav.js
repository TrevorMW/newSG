/**
 * @package     BlueAcorn/GreenPistachio
 * @version     4.1.0
 * @author      Blue Acorn, Inc. <code@blueacorn.com>
 * @copyright   Copyright © 2016 Blue Acorn, Inc.
 */

module.exports = function(grunt) {
    'use strict';

    var _ = require('lodash'),
        path = require('path'),
        paths = require('../configs/path'),
        options = require('../configs/options'),
        dwdav = require('ba-dwdav'),
        configReader = require('@tridnguyen/config');

    grunt.registerTask('uploadAndUnzip', 'Zip Post Upload Unzip Delete Folders for deployment', function() {
        var done = this.async();
        var _options = this.options({ authFile: paths.dwJson });
        var authFile = path.resolve(_options.authFile);
        var credentials = _.extend(configReader(authFile, {caller: false, verbose: true}), options);
        var server = dwdav(credentials);
        var file = paths.webroot + options.folder + '.zip';

        grunt.log.ok('Loaded auth credentials from: ' + authFile);
        grunt.log.ok('Uploading ' + file);
        server.postAndUnzip(file, done);
    });

    grunt.registerTask('deploy', 'Deployment Mechanism', function() {
        var done = this.async();
        var _options = this.options({ authFile: paths.dwJson });
        var authFile = path.resolve(_options.authFile);
        var credentials = _.extend(configReader(authFile, {caller: false, verbose: true}), options);
        var server = dwdav(credentials);

        return server.ensureVersion()
            .then(function(){
                grunt.task.run('compile');
                grunt.task.run('compress');
                grunt.task.run('uploadAndUnzip');
                done(0);
            });
    });

    grunt.registerTask('redeploy', 'Redeploys cartridge', function() {
        var done = this.async();
        var _options = this.options({ authFile: paths.dwJson });
        var authFile = path.resolve(_options.authFile);
        var credentials = _.extend(configReader(authFile, {caller: false, verbose: true}), options);
        var server = dwdav(credentials);

        return server.delete(paths.webroot + options.deletedFolder, false)
            .then(function () {
                return server.ensureVersion();
            }).then(function () {
                grunt.task.run('compile');
                grunt.task.run('compress');
                grunt.task.run('uploadAndUnzip');
                done(0);
            });
    });

    grunt.registerTask('delete', 'Deployment Deletion Mechanism', function() {
        var done = this.async();
        var _options = this.options({ authFile: paths.dwJson });
        var authFile = path.resolve(_options.authFile);
        var credentials = _.extend(configReader(authFile, {caller: false, verbose: true}), options);
        var server = dwdav(credentials);

        if(options.deletedFolder === null){
            grunt.fail.warn('Missing folder or file path option');
        } else {
            return server.delete(paths.webroot + options.deletedFolder, false)
                .then(function(){
                    done(0)
                });
        }
    });
};
