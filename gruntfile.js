'use strict';

module.exports = function(grunt) {

	var testFiles = ['app.js'];

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		nodemon: {
			dev: {
				script: 'alias-collision.js'
			}
		},

		jasmine_node: {
			options: {
				forceExit: true,
				match: '.',
				matchall: false,
				extensions: 'js',
				specNameMatcher: 'spec',
				jUnit: {
					report: true,
					savePath : './tests/report/',
					useDotNotation: true,
					consolidate: true
				}
			},
			all: ['tests/specs/']
		},

        plato: {
            report: {
                options : {
                    jshint : grunt.file.readJSON('.jshintrc')
                },
                files: {
                    'reports': testFiles
                }
            }
        }
	});

	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-jasmine-node');
	grunt.loadNpmTasks('grunt-plato');

	grunt.registerTask('doc', ['docco', 'plato']);
	grunt.registerTask('test', ['jasmine_node']);
	grunt.registerTask('default', ['nodemon']);
};