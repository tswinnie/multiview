/**
* Created by tyroneswinnie on 6/20/15.
*/
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'CSS/',
                    src: ['*.css', '!*.min.css', '!*.scss'],
                    dest: 'CSS/',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'JS/',
                    src: ['*.js', '!*.min.js'],
                    dest: 'JS/',
                    ext: '.min.js'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

};