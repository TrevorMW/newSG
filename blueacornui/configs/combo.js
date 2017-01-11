/**
* @package     BlueAcorn/GreenPistachio
* @version     4.1.0
* @author      Blue Acorn, Inc. <code@blueacorn.com>
* @copyright   Copyright © 2016 Blue Acorn, Inc.
*/

'use strict';

var _ = require('underscore'),
    theme = require('./themes'),
    path = require('./path');

module.exports = {
    autopath: function(themeName, folder) {
        return path.webroot + theme[themeName].name + '/' + folder + '/';
    },
    cssFiles: function(themeName) {
        var cssStringArray = [],
            i = 0,
            ii = 0;

        for (i; i < theme[themeName].locale.length; i++) {
            for(ii; ii < theme[themeName].scssFiles.length; ii++) {
                cssStringArray.push(this.autopath(themeName, 'cartridge') +
                    'static/' + theme[themeName].locale[i] + '/css/' + theme[themeName].scssFiles[ii] + '.css');
            }
        }

        return cssStringArray;
    },
    scssFiles: function(themeName) {
        var scssString,
            cssString,
            scssFiles = {},
            i = 0,
            ii = 0;

        for(i; i < theme[themeName].locale.length; i++) {

            for(ii; ii < theme[themeName].scssFiles.length; ii++) {
                cssString = this.autopath(themeName, 'cartridge') +
                    'static/' + theme[themeName].locale[i] + '/css/' + theme[themeName].scssFiles[ii] + '.css';

                scssString = this.autopath(themeName, 'cartridge') +
                    'scss/' + theme[themeName].locale[i] + '/' + theme[themeName].scssFiles[ii] + '.scss';

                scssFiles[cssString] = scssString;
            }
        }

        return scssFiles;
    },
    jsFiles: function(themeName) {
        if(theme[themeName].jsFiles.length > 0) {
            var source, destro,
                jsFiles = [],
                i = 0;

            for(i; i < theme[themeName].jsFiles.length; i++) {
                destro = this.autopath(themeName, 'cartridge') +
                    'static/default/js/' + theme[themeName].jsFiles[i] + '.js';

                source = this.autopath(themeName, 'cartridge') + 'js/' + theme[themeName].jsFiles[i] + '.js';

                jsFiles.push({
                    src: source,
                    dest: destro
                });
            }

            return jsFiles;
        }
    },
    themeFallback: function(themeName) {
        var themeFallbackIncludes = [];

        _.each(theme[themeName].bower_fallback, function(bower_component){
            themeFallbackIncludes.push(bower_component);
        });

        return themeFallbackIncludes;
    },
    watchFiles: function(themeName) {
        var files = [],
            i = 0;

        for(i; i < theme[themeName].locale.length; i++) {
            files.push(this.autopath(themeName, 'cartridge') +
                'scss/' + theme[themeName].locale[i] + '/**/*.scss');
            files.push(this.autopath(themeName, 'cartridge') +
                'js/**/*.js');
        }

        return files;
    }
};
