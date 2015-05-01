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
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'jscs']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.registerTask('default', ['jshint', 'jscs']);

};
