var fs = require('fs');
var Q = require('q');

module.exports = function (grunt) {
    grunt.registerTask( 'jsonExtend', 'json extend', function () {
        var hoge = grunt.config('jsonExtend').hoge;
        console.log(hoge);
    });
};

//
// var src = './src/js/lib/Staff.json';
// var dest = './build/public/js/Staff.json';
//
// var readJson = function( obj ){
//     var d = Q.defer();
//     fs.readFile( src, function( err, data ){
//         obj = JSON.parse(data);
//         d.resolve(obj);
//     });
//     return d.promise;
// };
//
// var makeMethods = function( obj ){
//
//     obj.link = (function(company){
//         var res = company ;
//         switch( company ){
//             case 'ghonsha':
//                 res = "b_group" ;
//                 break;
//             case 'seifun':
//                 res = "c_" + res ;
//                 break;
//             case 'foods':
//                 res = "d_" + res ;
//                 break;
//             case 'pharma':
//                 res = "e_" + res ;
//                 break;
//             case 'petfood':
//                 res = "f_" + res ;
//                 break;
//             case 'engineering':
//                 res = "g_" + res ;
//                 break;
//             case 'oriental':
//                 res = "h_" + res ;
//                 break;
//         }
//         return res;
//     })(obj.company);
//
//     obj.query_job = (function( job ){
//         var res;
//         switch( job ){
//             case 'clerk':
//                 res = '事務';
//                 break;
//             case 'chemistry':
//                 res = '食品化学';
//                 break;
//             case 'engineer':
//                 res = '工学';
//                 break;
//         }
//         return res;
//     })(obj.job);
//
//     obj.query_company = (function( company ){
//         var res = company ;
//         switch( company ){
//             case 'ghonsha':
//                 res = "日清製粉グループ";
//                 break;
//             case 'seifun':
//                 res = "日清製粉";
//                 break;
//             case 'foods':
//                 res = "日清フーズ";
//                 break;
//             case 'pharma':
//                 res = "日清ペットフード";
//                 break;
//             case 'petfood':
//                 res = "日清エンジニアリング";
//                 break;
//             case 'engineering':
//                 res = "日清ファルマ";
//                 break;
//             case 'oriental':
//                 res = "オリエンタル酵母工業";
//                 break;
//         }
//         return res;
//     })(obj.company);
//
//     obj.query_gender = (function( gender ){
//         var res = '';
//         switch( gender ){
//             case 'male':
//                 res += '男';
//                 break;
//             case 'female':
//                 res += '女';
//                 break;
//         }
//         return res;
//     })(obj.gender);
//
//     return obj;
// };
//
// var runTask = function( data ){
//     var d = Q.defer();
//     var arr = [];
//     for (var i = 0; i < data.length; i++) {
//         var obj = makeMethods(data[i]);
//         arr.push(obj);
//     }
//     d.resolve(arr);
//     return d.promise;
// };
//
// var writeJson = function( data ){
//     var obj = JSON.stringify(data, null, 4);
//     fs.writeFile( dest, obj, function( err ){
//         console.log('json file saved.');
//     })
// };
//
// var jsonHundler = function(){
//     Q.when([])
//     .then(readJson)
//     .then(runTask)
//     .done(writeJson);
// };
//
// jsonHundler();
