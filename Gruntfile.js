var grunt = require('grunt');

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jsonExtend: {
		}
	});

	[
		'grunt-json-extend',
	].forEach(function (task) {
		grunt.loadNpmTasks(task);
	})

	grunt.registerTask( 'default', [ 'jsonExtend' ]);
};
