/**
 * @package     BlueAcorn/GreenPistachio
 * @version     4.1.0
 * @author      Blue Acorn, Inc. <code@blueacorn.com>
 * @copyright   Copyright © 2016 Blue Acorn, Inc.
 */

'use strict';

var grunt = require('grunt'),
    _ = require('underscore');

function getDeletedPath(){
    if(grunt.option("folder")){
        return grunt.option("folder");
    }
    if(grunt.option("file")){
        return grunt.option("file");
    }
    return null;
}

module.exports = {
    folder: grunt.option("folder") ? grunt.option("folder") : "",
    deletedFolder: getDeletedPath(),
    cartridge: grunt.option("cartridge") ? grunt.option("cartridge") : "ba_gp_storefront_core",
    env: grunt.option("env") ? grunt.option("env") : "dev",
    compileType: (grunt.option("env") && grunt.option("env") === "staging") ? "staging" : "dev"
};
