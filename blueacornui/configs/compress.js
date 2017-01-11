/**
* @package     BlueAcorn/GreenPistachio
* @version     4.1.0
* @author      Blue Acorn, Inc. <code@blueacorn.com>
* @copyright   Copyright © 2016 Blue Acorn, Inc.
*/

'use strict';

var themes = require('./themes'),
    path = require('./path'),
    options = require('./options');

var compress = {
    main: {
        options: {
            mode: 'zip',
            archive: function () {
                return path.webroot + options.folder + '.zip'
            }
        },
        files: [{
            expand: true,
            cwd: path.webroot + options.folder + "/",
            src: path.compressPath,
            dest: '/' + options.folder,
        }]
    }
};

module.exports = compress;
