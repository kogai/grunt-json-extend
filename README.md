#grunt-json-extend

grunt plugin for generate extended json files.

## install
```shell
npm install --save-dev grunt-json-extend
```

## example

`src`
```json
[
    {
        "foo": "bar"
    }
]
```

`dest`
```json
[
    {
        "foo": "bar",
        "baz": "foobar"
    }
]
```

## usage

```javascript
module.exports = function(grunt) {
	grunt.initConfig({
		jsonExtend: {

            // add source json file here.
			src: './json/test-before.json',

            // add destination json file here.
			dest: './json/test-after.json',

            // write callback functions as array,
            // to extend your object's property.
			callbacks: [
				{
                    // set variables pass to callback function.
					val: [
						'foo',
						'bar'
					],
					callback: function( val ){
                        var result = val[0] + val[1];

                        // return object, you want to add for json file.
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
```
