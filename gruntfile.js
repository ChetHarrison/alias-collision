'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		watch: {
			files: ['alias-collision.js'],
			tasks: ['default']
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
					savePath: './tests/coverage',
					useDotNotation: true,
					consolidate: true
				}
			},
			all: ['tests/specs/**/*.js']
			// , coverage: {}
		},


		plato: {
			report: {
				options: {
					jshint: grunt.file.readJSON('.jshintrc')
				},
				files: {
					reports: ['<%= watch.files %>']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-jasmine-node-coverage');
	grunt.loadNpmTasks('grunt-jasmine-node');
	grunt.loadNpmTasks('grunt-plato');

	grunt.registerTask('default', 'Run test suite.', ['jasmine_node']);
};
