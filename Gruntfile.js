module.exports = function(grunt) {
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-exorcise');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-execute');
   grunt.loadNpmTasks('grunt-sass');
   grunt.loadNpmTasks('grunt-gh-pages');

   grunt.initConfig({
      project: {
         lib: {
            node: 'node_modules'
         },
         src: {
            root: './src',
            js: '<%= project.src.root %>/js',
            sass: '<%= project.src.root %>/sass',
            data: './data'
         },
         dist: {
            root: 'dist',
            css: '<%= project.dist.root %>/css',
            js: '<%= project.dist.root %>/js',
            data: '<%= project.dist.root %>/data',
            fonts: '<%= project.dist.root %>/fonts'
         }
      },
      sass: {
         dist: {
            options: {
               sourceMap: true,
               outputStyle: 'compressed',
               loadPath: [
                  '<%= project.src.root %>'
               ],
               trace: true,
               unixNewlines: true
            },
            files: [
               {
                  expand: true,
                  flatten: true,
                  cwd: '.',
                  src: ['<%= project.src.sass %>/main.scss'],
                  dest: '<%= project.dist.css %>',
                  ext: '.css'
               }
            ]
         }
      },
      browserify: {
         js: {
            options: {
               browserifyOptions: {
                  debug: true
               },
               alias: {
                  'config': '<%= project.src.js %>/config.js'
               }
            },
            files: {
              '<%= project.dist.js %>/bundle.js': '<%= project.src.root %>/app.js'
            }
         }
      },
      exorcise: {
         bundle: {
            options: {},
            files: {
               '<%= project.dist.js %>/bundle.map': '<%= project.dist.js %>/bundle.js'
            }
         }
      },
      copy: {
         app: {
            files: [
               {
                  expand: true,
                  cwd: '<%= project.src.root %>',
                  src: 'index.html',
                  dest: '<%= project.dist.root %>',
                  filter: 'isFile'
               },
            ]
         },
         data: {
            files: [
               {
                  expand: true,
                  cwd: '<%= project.src.data %>',
                  src: '**/*.json',
                  dest: '<%= project.dist.data %>',
                  filter: 'isFile'
               },
            ]
         },
         fonts: {
            files: [
               {
                  expand: true,
                  cwd: '<%= project.lib.node %>/font-awesome/fonts',
                  src: '*',
                  dest: '<%= project.dist.fonts %>'
               }
            ]
         }
      },
      execute: {
         buildIndex: {
            src: ['util/generate-index.js']
         }
      },
      watch: {
         files: [
            '<%= project.src.root %>/**/*.js',
            '<%= project.src.root %>/**/*.scss',
            '<%= project.src.root %>/**/*.html',
            '<%= project.src.data %>/**/*.json',
         ],
         tasks: ['default']
      },
      jshint: {
         files: ['Gruntfile.js', '<%= project.src.root %>/app.js', '<%= project.src.js %>/**/*.js']
      },
      'gh-pages': {
         options: {
            base: 'dist',
            push: false  // Commit only, don't automatically push changes
         },
         src: ['**']
      }
   });

   grunt.registerTask('default', ['jshint', 'sass:dist', 'browserify', 'exorcise', 'copy:app', 'copy:data', 'copy:fonts', 'execute:buildIndex']);
   grunt.registerTask('deploy', ['default', 'gh-pages']);
};
