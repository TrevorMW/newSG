/**
* @package     BlueAcorn/GreenPistachio
* @version     4.1.0
* @author      Blue Acorn, Inc. <code@blueacorn.com>
* @copyright   Copyright © 2016 Blue Acorn, Inc.
*/

'use strict';

module.exports = {
    default: {
        grunt: false,
        area: 'frontend',
        name: 'app_storefront_core',
        locale: 'default',
        theme_fallback: []
    },
    ba_gp_storefront_core: {
        grunt: true,
        area: 'frontend',
        name: 'ba_gp_storefront_core',
        locale: ['default'],
        dsl: 'scss',
        scssFiles: ['myaccount', 'search', 'cart-checkout', 'storefront', 'product', 'style'],
        jsFiles: ['app'],
        bower_fallback: [
            'bower_components/sass-list-maps/_sass-list-maps.scss',
            'bower_components/bourbon/app/assets/stylesheets/',
            'bower_components/neat/app/assets/stylesheets/'
        ],
        theme_fallback: []
    }
};
