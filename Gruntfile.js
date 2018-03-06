module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      css: {
        files: [
          "app/css/partials/*.scss",
          "app/css/styles.scss"
        ],
        tasks: ['sass']
      },
      js: {
        files: ["app/js/src/*.coffee"],
        tasks: ['coffee', 'uglify']
      }
    },

    sass: {
      dev: {
        files: {
          "app/css/styles.css" : "app/css/styles.scss"
        }
      }
    },

    // any files ending in .js placed in app/js/src
    // will be minified into main.min.js
    uglify: {
      build: {
        src: "app/js/src/*.js",
        dest: "app/js/main.min.js"
      }
    },

    cssmin: {
      target: {
        files: {
          'app/css/styles.min.css': ['app/css/styles.css']
        }
      }
    },

    browserSync: {
      bsFiles: {
        src: [
          "app/*",
          "app/css/*",
          "app/js/*"
        ]
      },
      options: {
        watchTask: true,
        server: {
          baseDir: 'app/'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // register a default task
  grunt.registerTask('default', ['browserSync', 'watch']);

  // this will minify everything, do this before
  // pushing to production
  grunt.registerTask('min', ['sass', 'uglify', 'cssmin']);
};
