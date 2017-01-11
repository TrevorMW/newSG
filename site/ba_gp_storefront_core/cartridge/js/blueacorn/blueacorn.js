/**
 * @package     Blueacorn\BlueAcornApplication
 * @version     1.0
 * @author      Blue Acorn <code@blueacorn.com>
 * @copyright   Copyright © 2015 Blue Acorn.
 */

'use strict';

window.ba = require('./blueacorn-core');

var responsiveNote = require('./blueacorn-responsive-note'),
    customFormElements = require('./blueacorn-custom-form-elements'),
    superSelects = require('./blueacorn-super-selects');

/**
 * There has to be a better way to inject these. Having
 * to require the module, create another module with the calls from
 * above are dumb and will cause confusion. Need to figure out a way to
 * dynamically call all these requires.
 *
 * @todo need to convert to dynamic method... if possible.
 *
 * NOT USING THIS AS OF RIGHT NOW
 * @see resources/appresources.isml
 */
var baBoot = {
    init: function () {
        // init specific global components
        ba.init({debug: SitePreferences.BA_DEVELOPER_DEBUGGING});
        responsiveNote.init();
    }
};