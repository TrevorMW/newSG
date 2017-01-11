# Green Pistachio

It's like eating a **handful** of _pre-shelled_ front end Demandware plugins.

##### [Features](id:features)
* Sass compilation
* Faster Development with IDEs not inluding Eclipse :)
* JS Linting for Code Quality Checks
* Staging Compilation Settings
* Production Compilation Settings
* Autoprefixing for the most common supported browsers, and a seperate autoprefixing task for IE8
* Autouploading to sandboxes for quicker turn around
* Deployment/Deletion mechanism


# How to Use


### Getting started


###### [Workflow Setup]

	$: cd /path/to/blueacornui
	$/path/to/blueacornui: ./setup site_setup

In order for the above to work, you need to create a file "dw.json" in the blueacornui directory.

In order for the above to work, you need to create a file "dw.json" in the blueacornui directory.

In order for the above to work, you need to create a file "dw.json" in the blueacornui directory.

In order for the above to work, you need to create a file "dw.json" in the blueacornui directory.

In order for the above to work, you need to create a file "dw.json" in the blueacornui directory.

In order for the above to work, you need to create a file "dw.json" in the blueacornui directory.

	{
      "hostname": "blueacorn01-alliance-prtnr-na01-dw.demandware.net", // URL to sandbox without protocol and WEBDAV
      "username": "test.user",
      "password": "pass",
      "version": "version1", // version number of the WEBDAV code you wish to upload to
      "root": "../site/" // Where the cartridges are located based on blueacornui directory
    }

**live development**
Run the following command to watch your cartridges for changes and compile SASS & JS on save, as well as upload changed files to the sandbox.

	$: cd /path/to/blueacornui
	$/path/to/blueacornui/: grunt


**theme compiling**
This will lint & compile all your SASS & JS files to css & upload to your sandbox whenever you save a js, scss file.

	$: cd /path/to/blueacornui
	$/path/to/blueacornui/: grunt compile


**Passing in arguments**
compilation tasks all accept various parameters you can set when running the task.

The following parameters are avaiable:

* cartridge - accepts a string based cartridge name that will limit your grunt tasks too, defaults to ba_gp_storefront_core
* env - accepts a string of either "dev" or "production" - defaults to "dev"
* folder - accepts a string based folder path, used only in the "grunt deploy" or "grunt delete" task
* file - accepts a string based file path, used only in the "grunt delete" task

**Example**
Example of using parameters with grunt tasks

	$: cd /path/to/blueacornui
	$/path/to/blueacornui/: grunt compile --cartridge="ba_gp_storefront_core" --env="dev"


# Important Notes


**Deploying** cartridges does a combination of things in the following order:

* Compresses the folder to a .zip format
* Uploads the .zip to the sandbox
* Unzips the directory
* Deletes the zip file from the server
* Deletes the zip file from the repo

**Deleting** files/folders

	$: cd /path/to/blueacornui
	$/path/to/blueacornui/: grunt delete --folder="/"

The above will delete the current version working directory. For example, if you are have version1 setup in the dw.json file, that folder will be deleted from the sandbox -- you will then have to recreate it.

# Core Updates
* Adds custom form elements to shipping methods in checkout on AJAX success - ba_gp_storefront_core/cartridge/js/pages/checkout/shipping.js#L135
* Reinitializes superselects after product sorting on AJAX success - ba_gp_storefront_core/cartridge/js/pages/search.js#L66