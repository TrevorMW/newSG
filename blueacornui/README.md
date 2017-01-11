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

    {
      "root": "../site/" // Where the cartridges are located based on blueacornui directory
      "enviroments": {
          "dev": { // Your default sandbox instance
            "hostname": "blueacorn01-alliance-prtnr-na01-dw.demandware.net", // URL to sandbox without protocol and WEBDAV
            "username": "test.user",
            "password": "pass",
            "version": "version1", // version number of the WEBDAV code you wish to upload to
          }  
      }
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
* env - accepts a string of either "dev" or "staging" - defaults to "dev"
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
	$/path/to/blueacornui/: grunt delete --file="/ba_gp_storefront_core/cartridge/controllers/Styleguide.js"
	
The above will delete the current version working directory. For example, if you are have version1 setup in the dw.json file, that folder will be deleted from the sandbox -- you will then have to recreate it.


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
	$/path/to/blueacornui/: grunt delete --file="/ba_gp_storefront_core/cartridge/controllers/Styleguide.js"

The above will delete the current version working directory. For example, if you are have version1 setup in the dw.json file, that folder will be deleted from the sandbox -- you will then have to recreate it.


# QA

Once the site is set up based on the instructions above, obtain the latest changes for your release by performing the following:

**Checkout / Pull changes** for unstable/[release] within site's root directory.

	$: cd /path/to/siteroot
	$/path/to/siteroot: git checkout unstable/releaseA
		//or
	$/path/to/siteroot: git pull unstable/releaseA

Navigate to blueacornui folder and **execute grunt deploy** command.

	$: cd /path/to/siteroot/blueacornui
	$/path/to/siteroot/blueacornui: grunt deploy
		//or
	$/path/to/siteroot/blueacornui: grunt deploy --folder="/"
		//or
	$/path/to/siteroot/blueacornui: grunt deploy --folder="cartridge_name" //obtain specific cartridge name from Developer

Although you may not have to, it's a nice sanity check to **rebuild all indexes** and **manually invalidate caches** (e.g. perhaps the main navigation does not exist on the storefront).

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
	$/path/to/blueacornui/: grunt delete --file="/ba_gp_storefront_core/cartridge/controllers/Styleguide.js"

The above will delete the current version working directory. For example, if you are have version1 setup in the dw.json file, that folder will be deleted from the sandbox -- you will then have to recreate it.


# QA

Once the site is set up based on the instructions above, obtain the latest changes for your release by performing the following:

**Checkout / Pull changes** for unstable/[release] within site's root directory.

	$: cd /path/to/siteroot
	$/path/to/siteroot: git checkout unstable/releaseA
		//or
	$/path/to/siteroot: git pull unstable/releaseA

Navigate to blueacornui folder and **execute grunt deploy** command.

	$: cd /path/to/siteroot/blueacornui
	$/path/to/siteroot/blueacornui: grunt deploy
		//or
	$/path/to/siteroot/blueacornui: grunt deploy --folder="/"
		//or
	$/path/to/siteroot/blueacornui: grunt deploy --folder="cartridge_name" //obtain specific cartridge name from Developer

Although you may not have to, it's a nice sanity check to **rebuild all indexes** and **manually invalidate caches** (e.g. perhaps the main navigation does not exist on the storefront).

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
	$/path/to/blueacornui/: grunt delete --file="/ba_gp_storefront_core/cartridge/controllers/Styleguide.js"

The above will delete the current version working directory. For example, if you are have version1 setup in the dw.json file, that folder will be deleted from the sandbox -- you will then have to recreate it.


# QA

Once the site is set up based on the instructions above, obtain the latest changes for your release by performing the following:

**Checkout / Pull changes** for unstable/[release] within site's root directory.

	$: cd /path/to/siteroot
	$/path/to/siteroot: git checkout unstable/releaseA
		//or
	$/path/to/siteroot: git pull unstable/releaseA

Navigate to blueacornui folder and **execute grunt deploy** command.

	$: cd /path/to/siteroot/blueacornui
	$/path/to/siteroot/blueacornui: grunt deploy
		//or
	$/path/to/siteroot/blueacornui: grunt deploy --folder="/"
		//or
	$/path/to/siteroot/blueacornui: grunt deploy --folder="cartridge_name" //obtain specific cartridge name from Developer

Although you may not have to, it's a nice sanity check to **rebuild all indexes** and **manually invalidate caches** (e.g. perhaps the main navigation does not exist on the storefront).

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
	$/path/to/blueacornui/: grunt delete --file="/ba_gp_storefront_core/cartridge/controllers/Styleguide.js"

The above will delete the current version working directory. For example, if you are have version1 setup in the dw.json file, that folder will be deleted from the sandbox -- you will then have to recreate it.


# QA

Once the site is set up based on the instructions above, obtain the latest changes for your release by performing the following:

**Checkout / Pull changes** for unstable/[release] within site's root directory.

	$: cd /path/to/siteroot
	$/path/to/siteroot: git checkout unstable/releaseA
		//or
	$/path/to/siteroot: git pull unstable/releaseA

Navigate to blueacornui folder and **execute grunt deploy** command.

	$: cd /path/to/siteroot/blueacornui
	$/path/to/siteroot/blueacornui: grunt deploy
		//or
	$/path/to/siteroot/blueacornui: grunt deploy --folder="/"
		//or
	$/path/to/siteroot/blueacornui: grunt deploy --folder="cartridge_name" //obtain specific cartridge name from Developer

Although you may not have to, it's a nice sanity check to **rebuild all indexes** and **manually invalidate caches** (e.g. perhaps the main navigation does not exist on the storefront).

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
	$/path/to/blueacornui/: grunt delete --file="/ba_gp_storefront_core/cartridge/controllers/Styleguide.js"

The above will delete the current version working directory. For example, if you are have version1 setup in the dw.json file, that folder will be deleted from the sandbox -- you will then have to recreate it.


# QA

Once the site is set up based on the instructions above, obtain the latest changes for your release by performing the following:

**Checkout / Pull changes** for unstable/[release] within site's root directory.

	$: cd /path/to/siteroot
	$/path/to/siteroot: git checkout unstable/releaseA
		//or
	$/path/to/siteroot: git pull unstable/releaseA

Navigate to blueacornui folder and **execute grunt deploy** command.

	$: cd /path/to/siteroot/blueacornui
	$/path/to/siteroot/blueacornui: grunt deploy
		//or
	$/path/to/siteroot/blueacornui: grunt deploy --folder="/"
		//or
	$/path/to/siteroot/blueacornui: grunt deploy --folder="cartridge_name" //obtain specific cartridge name from Developer

Although you may not have to, it's a nice sanity check to **rebuild all indexes** and **manually invalidate caches** (e.g. perhaps the main navigation does not exist on the storefront).

<ol type="1">
<li>Select site and navigate to Merchant Tools > Search > Search Indexes </li>
<li>Select all checkboxes for indexes, both for Index Type and Shared Index Type </li>
<li>Click "Rebuild". </li>
<li>Navigate to Administration > Sites > Manage Sites > [site] > Cache tab. </li>
<li>Click "Invalidate" for each Cache Invalidation and Page Partitions. </li>
</ol>

If neccessary, **import meta data** from /path/to/site/metadata/[file].xml (consult Developers if/what meta data needs to be imported)

<ol type="1">
<li>Download meta data file(s) from /path/to/site/metadata/ </li>
<li>Navigate to appropriate area for Import & Export
<br><i>(Considering Demandware has several areas where importing/exporting can occur, you will need to obtain this information from Developers or UAT documentation)</i> </li>
<li>Under "Import & Export Files", click Upload link </li>
<li>Upload meta data file(s) here </li>
<li>Navigate back to Import & Export </li>
<li>Under "Meta Data", click Import link </li>
<li>Select meta data file from list (only one file can be imported at a time) </li>
<li>Click "Next" and allow system to validate file </li>
<li>Unless specified otherwise by Developer, select Merge and click "Import" </li>
</ol>
