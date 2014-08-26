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
        build: {
            options: {
               cleancss: true,
               strictImports: true,
               relativeUrls: false,
               sourceMap: true,
               compress: true,
            },
            files: {
                '<%= config.outputBase %>/css/app.css' : '<%= config.inputBase %>/less/main.less'
            }
        }
    },
    /** JSHint configuration */
    jshint: {
        options: {
          jshintrc: '.jshintrc'
        },
        all: [
            '<%= config.inputBase %>/javascripts/app/common/**/*.js',
            '<%= config.inputBase %>/javascripts/app/modules/**/*.js',
            //grunt.file.read('.jshintignore').trim().split('\n').map(function(s) { return '!' + s; })
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
    copy: {
        build: {
            files: [
                { flatten: false, expand: true, cwd: '<%= config.inputBase %>',
                    src: 'bower_components/requirejs/require.js', dest: '<%= config.outputBase %>' }
            ]
        },
        others: {
            files: [{
              src: 'src/js/html5shiv.js',
              dest: 'build/js/html5shiv.js'
            }]
          }
    },

});

  grunt.registerTask('devserver', [
    'server'
  ]);

  grunt.registerTask('build', [
    'jshint',
    'less',
    'copy',
    'requirejs'
  ]);
};

