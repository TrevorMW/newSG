/**
 * @module controllers/Superselects
 */

var app = require('app_storefront_controllers/cartridge/scripts/app');

exports.Start = function(){
    app.getView().render('blueacorn/content/superselects'); 
};

exports.Start.public = true;
