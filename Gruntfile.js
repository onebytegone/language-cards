module.exports = function(grunt) {
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-exorcise');
   grunt.loadNpmTasks('grunt-contrib-copy');

   grunt.initConfig({
      project: {
         src: {
            root: './src',
            js: '<%= project.src.root %>/js',
            data: './data'
         },
         dist: {
            root: 'dist',
            js: '<%= project.dist.root %>/js',
            data: '<%= project.dist.root %>/data'
         }
      },
      browserify: {
         js: {
            options: {
               browserifyOptions: {
                  debug: true
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
         }
      },
      watch: {
         files: [
            '<%= project.src.root %>/**/*.js',
            '<%= project.src.root %>/**/*.html',
         ],
         tasks: ['default']
      }
   });

   grunt.registerTask('default', ['browserify', 'exorcise', 'copy:app', 'copy:data']);
};
