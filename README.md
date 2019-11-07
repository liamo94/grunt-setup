#Grunt project

This is a project to hold some local grunt set up with some useful plugins

##Plugins
###Dev
- **watch** - Checks to see if any changes have been made to specified files in specified paths
- **sass** - transpiles the sass into css
- **http-server** - Creates a local server on port 8080

###Build
- **clean** - Deletes the dist folder and all contents to make a clean fresh build
- **browserify** - compile node.js modules for use in browser. Also requires **babel** to convert back to es5.
- **uglify** - minifies all the js files (and combines the files should you choose)

###Others
- **copy** - copies folders and files to other location
- **string-replace** - Replaces strings using string literals or regular expressions

The grunt file is split up so all components can be under the *grunt* folder. This is because of the plugin **load-grunt-config**, with all grunt tasks registered in the *alisases.yaml* file.

###Once started:
    npm install

###Grunt tasks
| Command               | Info
|:---------------------:|:------------------------------------------------------:|
| **grunt dev**         | creates a local server on port 8080, and watches files |
| **grunt build**       | creates dist folder with all production ready files    |
| **grunt PLUGIN_NAME** | run just one plugin                                    |