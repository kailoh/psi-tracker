module.exports = function(grunt) {

require('time-grunt')(grunt); //displays elapsed execution time of grunt tasks
require('load-grunt-tasks')(grunt); //look for plugins in dependencies/devDependencies starting with grunt & loads them

grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
        dev: ['build', 'public']
    },

  react: {
    dev: {
      files: {
        'build/reactcomponents.js': 'client/views/*.jsx'
      }
    },
  },

    concat: { 
        'build/app.js': //must be in this specific order if not will fail to find references
        ['client/models/*.js', 
        'client/views/*.js',
        'client/controllers/*.js'],

        'build/styles.css':
        ['client/styles/styles.css']
    },

    copy: { //in dev mode, copy files from build directory to public so our front-end app can see them and our server can server them
        dev: {
            files: [{
                expand: true,
                cwd: 'build/',
                src: '*.js',
                dest: 'public/js/',
                flatten: true,
                filter: 'isFile',
            }, {
                expand: true,
                cwd: 'build/',
                src: '*.css',
                dest: 'public/css/',
                flatten: true,
                filter: 'isFile',
            }, {
                expand: true,
                cwd: 'client/',
                src: '*.html',
                dest: 'public/',
                flatten: true,
                filter: 'isFile',
            }]
        }
    },

    // mongod server launcher
    shell: {
        mongo: {
            command: 'mongod',
            options: {
                async: true
            }
        }
    },

    nodemon: {
        dev: {
            script: 'server.js',
            options: {
                nodeArgs: ['--debug'],
                watch: ['controllers', 'views', 'server.js'], // top-level files are auto-watched by nodemon??
                env: {
                    PORT: '80'
                }
            }
        }
    },

    concurrent: { //execute blocking tasks asynchronously
        dev: {
            tasks: ['nodemon:dev', 'watch:frontend', 'shell:mongo'],
            options: {
                logConcurrentOutput: true
            }
        }
    },


    watch: { //if any of these files change, build again
        frontend: {
            files: ['client/**/*'],
            tasks: ['build:dev']
        }
    }


});

grunt.registerTask('build:dev', ['clean:dev', 'concat', 'react', 'copy:dev']);
grunt.registerTask('server', ['build:dev', 'concurrent:dev']);

};