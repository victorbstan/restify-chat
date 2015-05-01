module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: [
        'Gruntfile.js',
        'server.js',
        'test/**/*.js',
        'app/**/*.js',
        'public/app/**/*.js'
      ],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    jscs: {
      src: [
        'Gruntfile.js',
        'server.js',
        'test/**/*.js',
        'app/**/*.js',
        'public/app/**/*.js'
      ],
      options: {
        config: '.jscsrc',
        requireCurlyBraces: ['if'],
        fix: true
      }
    },
    less: {
      styles: {
        options: {
          compress: true
        },
        files: {
          'public/dist/style.css': [
            'public/lib/bootstrap/dist/css/bootstrap.min.css',
            'public/styles/main.less'
          ]
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'public/lib/less/dist/less.min.js',
          'public/lib/angular/angular.min.js',
          'public/lib/angular-bootstrap/ui-bootstrap.min.js',
          'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
          'public/app/**/*.js'
        ],
        dest: 'public/dist/app.js',
      },
    },
    watch: {
      files: ['<%= jshint.files %>', '<%= jscs.src %>'],
      tasks: ['jshint', 'jscs', 'concat', 'less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('assemble-less');

  grunt.registerTask('default', ['jshint', 'jscs', 'concat', 'less']);

};
