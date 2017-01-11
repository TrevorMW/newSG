/**
 * @package     BlueAcorn/GreenPistachio
 * @version     4.1.0
 * @author      Blue Acorn, Inc. <code@blueacorn.com>
 * @copyright   Copyright © 2016 Blue Acorn, Inc.
 */

'use strict';

module.exports = {
    defaultTheme: 'site',
    defaultPackage: 'blueacorn',
    webroot: '../site/',
    dwJson: './dw.json',
    compressPath: ['**/package.json', '**/cartridge/**/*.{ico,js,ds,json,properties,xml,isml,css,map,css.map,png,jpg,gif,svg,jpeg,eot,ttf,woff,woff2,swf,htm,html,wsdl}'],
    uploadFiles: ['../storefront_controllers/cartridge/controllers/Product.js'],
    serverFiles: [
        '../site/**/cartridge/webreferences/*',
        '../site/**/cartridge/webreferences2/*',
        '../site/app_storefront_controllers/cartridge/**/*.{js,json,properties}',
        '../site/app_storefront_core/cartridge/**/*.{isml,json,properties,xml}',
        '../site/app_storefront_core/cartridge/scripts/**/*.{js,ds}',
        '../site/app_storefront_core/cartridge/controllers/**/*.js',
        '../site/app_storefront_core/cartridge/static/**/*.{png,gif}',
        '../site/ba_gp_storefront_core/cartridge/**/*.{isml,json,properties,xml}',
        '../site/ba_gp_storefront_core/cartridge/scripts/**/*.{js,ds}',
        '../site/ba_gp_storefront_core/cartridge/controllers/**/*.js',
        '../site/ba_gp_storefront_core/cartridge/static/**/*.{png,gif,map}',
        '../site/ba_gp_storefront_core/cartridge/webreferences2/**/*',
        '../site/ba_gp_storefront_core/cartridge/webreferences/**/*',
        '../site/**/cartridge/**/*'
    ]
};
