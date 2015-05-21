
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        expand : true,
        cwd : 'src',
        src: '**/*.js',
        dest: 'build/'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'build/css/a.css': 'src/css/a.scss'
        }
      }
    },
    watch: {
      options: {
        atBegin: true // 启动后立即执行触发任务
      },
      styles: {
        files: ['src/**/*.scss'],
        tasks: ['sass','copy:styles']
      },
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['copy:scripts','jshint:debug']
      },
      images : {
        files: ['src/images/*.{jpg,png,gif}'],
        tasks: ['copy:images']
      }
    },
    copy : {
      scripts : {
        files : [
          {
            expand : true,
            cwd : 'src',
            src : ['**/*.js'],
            dest : 'build/'
          }
        ]
      },
      styles : {
        files : [
          {
            expand : true,
            cwd : 'build',
            src : ['**/*.css'],
            dest : 'src/'
          }
        ]
      },
      images : {
        files : [{
          expand : true,
          cwd : 'src',
          src : ['**/*.{jpg,png,gif}'],
          dest : 'build/'
        }]
      }
    },
    clean : {
      all : 'build/**/*.js'
    },
    jshint : {
      debug : {
        files : {
          src : ['src/**/*.js']
        }
      },
      build : {
        files : {
          src : ['build/**/*.js']
        }
      }
    },
    imagemin : {
      dynamic : {
        files : [
          {
            expand : true,
            cwd : 'src',
            src : ['**/*.{jpg,png,gif}'],
            dest : 'build/'
          }
        ]
      }
    },
    cssmin : {
      target : {
        files : [{
          expand : true,
          cwd : 'src',
          src : ['**/*.css'],
          dest : 'build/'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin that provides the "clean" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Load the plugin that provides the "imagemin" task.
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //grunt.registerTask('default', ['uglify']);

  grunt.registerTask('build', [
    'clean',
    'uglify:build',
    'imagemin',
    'cssmin'
  ]);

  grunt.registerTask('dev', [
    'clean',
    'watch'
  ]);

};