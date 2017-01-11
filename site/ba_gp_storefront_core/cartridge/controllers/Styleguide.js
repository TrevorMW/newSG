/**
 * @module controllers/StyleGuide
 */

var app = require('app_storefront_controllers/cartridge/scripts/app');

exports.Start = function(){
    app.getView().render('blueacorn/content/styleguide');
};

exports.Start.public = true;