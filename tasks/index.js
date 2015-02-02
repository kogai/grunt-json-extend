"use strict";

var jsonExtend = require('../lib');

module.exports = function (grunt) {
    grunt.registerTask( 'jsonExtend', 'json extend', function () {
        var src = grunt.config('jsonExtend').src;
        var dest = grunt.config('jsonExtend').dest;
        var callbacks = grunt.config('jsonExtend').callbacks;
        var done = this.async();
        jsonExtend( src, dest, callbacks, done );
    });
};
