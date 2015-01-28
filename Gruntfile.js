var grunt = require('grunt');

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jsonExtend: {
			src: './src/js/lib/Staff.json',
			dest: './build/public/js/Staff.json',
			callbacks: [
				function( srcProperty, destProperty ){

				},
				function( srcProperty, destProperty ){

				}
			]
		}
	});
	grunt.task.loadTasks("tasks");
	grunt.registerTask( 'default', [ 'jsonExtend' ]);
};
