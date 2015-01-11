/**
 * Created by virhi on 11/01/15.
 */


module.exports = function(grunt) {

    grunt.initConfig({

        copy: {
            boostrap_fonts: {
                src: 'lib/bootstrap/3.3.1/fonts/*',
                dest: 'public/',
                filter: 'isFile',
                expand: true,
                flatten: true
            },
            font_awesome: {
                src: 'lib/font-awesome-4.2.0/fonts/*',
                dest: 'public/',
                filter: 'isFile',
                expand: true,
                flatten: true
            },
            images: {
                src: 'resources/images/*',
                dest: 'public/',
                filter: 'isFile',
                expand: true,
                flatten: true
            }

        },
        jshint: {
            all: []
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'public/min.js': ['lib/jquery/1.11.2/jquery.min.js', 'lib/bootstrap/3.3.1/dist/js/bootstrap.min.js']
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "public/style.css": "resources/less/style.less"
                }
            }
        },
        cssmin: {
            production: {
                files: {
                    'public/style.min.css': [ 'public/style.css']
                }
            }
        },
        watch: {
            less: {
                files: ['resources/less/*.less'],
                tasks: ['less:development'],
                options: {
                    spawn: false
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy', 'jshint', 'uglify:dist', 'less:development', 'cssmin:production']);
}