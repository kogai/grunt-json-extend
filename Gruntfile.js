var grunt = require('grunt');

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jsonExtend: {
			src: './json/test-before.json',
			dest: './json/test-after.json',
			callbacks: [
				{
					val: [
						'bar',
						'foo'
					],
					callback: function( val ){
						return {
							"foobaz": val[0] + val[1]
						};
					}
				},
				{
					val: [
						'foo',
						'bar'
					],
					callback: function( val ){
						return {
							"baz": val[0] + val[1]
						};
					}
				}
			]
		}
	});
	grunt.task.loadTasks("tasks");
	grunt.registerTask( 'default', [ 'jsonExtend' ]);
};
