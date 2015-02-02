var grunt = require('grunt');

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jsonExtend: {
			src: './test/json/test-before.json',
			dest: './test/json/test-after.json',
			callbacks: [
				function( obj ){

					var res = '';

				    switch( obj.gender ){
				        case 'male':
				            res += '男';
				            break;
				        case 'female':
				            res += '女';
				            break;
				    }
					return {
						"query_gender": res
					};
				}
			]
		}
	});
	grunt.task.loadTasks("tasks");
	grunt.registerTask( 'default', [ 'jsonExtend' ]);
};
