"use strict";

var fs = require('fs');
var Q = require('q');

module.exports = function (grunt) {
    grunt.registerTask( 'jsonExtend', 'json extend', function () {

        var src = grunt.config('jsonExtend').src;
        var dest = grunt.config('jsonExtend').dest;
        var callbacks = grunt.config('jsonExtend').callbacks;
        var done = this.async();

        var readJson = function( obj ){
            var d = Q.defer();
            fs.readFile( src, function( err, data ){
                obj = JSON.parse(data);
                d.resolve(obj);
            });
            return d.promise;
        };

        var runTask = function( data ){
            var d = Q.defer();
            for (var x = 0; x < data.length; x++) {
                data[x];

                var arr = [];
                for (var i = 0; i < callbacks.length; i++ ) {
                    var result = callbacks[i]( data[x] );
                    if( typeof result !== 'object' ){
                        throw '\nCallback function expect return the object.\nReturn value is ' + result ;
                    }
                    arr.push(result);
                }

                for (var i = 0; i < arr.length; i++) {
                    var obj = arr[i];
                    for( var key in obj ){
                        data[x][key] = obj[key];
                    }
                }

            }
            d.resolve(data);
            return d.promise;
        };

        var writeJson = function( data ){
            var obj = JSON.stringify(data, null, 4);
            fs.writeFile( dest, obj, function( err ){
                console.log('json file saved.');
            })
        };

        var jsonHundler = function(){
            Q.when([])
            .then(readJson)
            .then(runTask)
            .done(writeJson);
        };

        jsonHundler();

    });
};
