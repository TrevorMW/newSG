/**
 * @package     BlueAcorn/GreenPistachio
 * @version     4.1.0
 * @author      Blue Acorn, Inc. <code@blueacorn.com>
 * @copyright   Copyright © 2016 Blue Acorn, Inc.
 */

'use strict';

var combo  = require('./combo'),
    themes = require('./themes'),
    _      = require('underscore');

var themeOptions = {};

_.each(themes, function(theme, name) {
    if(theme.grunt) {
        themeOptions[name + 'dev'] = {
            options: {
                browserifyOptions: {
                    debug: true,
                    paths: ["../site/app_storefront_core/cartridge/js"]
                }
            },
            files: combo.jsFiles(name)
        };
    }
});

module.exports = themeOptions;
