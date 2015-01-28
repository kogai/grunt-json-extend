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
						'foo'
					],
					callback: function( val, obj ){
                        var result = val[0] + ' + ' + obj[val[0]];
						return {
							"baz": result
						};
					}
				}
			]
		}
	});
	grunt.task.loadTasks("tasks");
	grunt.registerTask( 'default', [ 'jsonExtend' ]);
};
