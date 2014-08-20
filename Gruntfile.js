module.exports = function (grunt) {
// Load grunt tasks automatically
require('load-grunt-tasks')(grunt);

// Define the configuration for all the tasks
grunt.initConfig({
    // Project settings
    config: {
        // Configurable paths
        app: 'src',
        inputBase : 'src/',
        outputBase : 'build/',
    },
    /** Less compiler config **/
    less: {
        for_prod: {
            options: {
               cleancss: true,
               strictImports: true,
               relativeUrls: false,
               sourceMap: true,
               compress: true,
            },
            files: {
                '<%= config.outputBase %>/stylesheets/app.css' : '<%= config.inputBase %>/stylesheets/app.less'
            }
        }
    },
    /** JSHint configuration */
    jshint: {
        options: {
          jshintrc: '.jshintrc'
        },
        all: [
            '<%= config.inputBase %>/javascripts/telepath/**/*.js',
            '<%= config.inputBase %>/partials/**/*.js',
            grunt.file.read('.jshintignore').trim().split('\n').map(function(s) { return '!' + s; })
        ]
        //test: [ 'test/**/*.js' ],

    },
    /** RequireJS Optimization configuration **/
    requirejs: {
        app : {
            options : {
               baseUrl : '<%= config.inputBase %>/javascripts',
               name : 'main',
               mainConfigFile : ['src/javascripts/main.js'],
               out : '<%= config.outputBase %>/<%= config.buildVersion %>/javascripts/main.js'
            }
        }
    },
    express: {
        local: {
            options: {
                script: 'server.js',
                node_env: 'local'
            }
        },
        production: {
            options: {
                script: 'server.js',
            }
        }
    }
});

  grunt.registerTask('devserver', [
    'server'
  ]);

  grunt.registerTask('build', [
    'jshint',
    'less',
    'requirejs'
  ]);
};

