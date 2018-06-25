module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1600,
            suffix: '_lg',
            quality: 80
          },
          {
            width: 700,
            height: 380,
            aspectRatio: false,
            gravity: "NorthWest",
            suffix: '_s',
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img',
          dest: 'img/resp'
        }]
      }
    },

    watch: {
      css: {
        files: 'style/less/source.less',
        tasks: ['less'],
        options: {
          livereload: true,
        },
      },
    },

    clean: {
      dev: {
        src: ['img/resp'],
      },
    },

    mkdir: {
      dev: {
        options: {
          create: ['img/resp']
        },
      },
    },
    less: {
      development: {
        options: {
          paths: ['style']
        },
        files: {
          'style/css/style.css': 'style/less/source.less'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'less']);
}