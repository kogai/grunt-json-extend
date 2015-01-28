var grunt = require('grunt');

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jsonExtend: {
			hoge: 'foo bar'
		}
	});
	grunt.task.loadTasks("tasks");
	grunt.registerTask( 'default', [ 'jsonExtend' ]);
};
