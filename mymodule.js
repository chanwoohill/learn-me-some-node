var fs = require('fs');
var path = require('path');

module.exports = function (dirPath, extension, callback) {
  var filteredFiles = [];  

  fs.readdir(dirPath, function (err, list) {
    if (err) {
      return callback(err);
    }

    list.forEach(function (file) {
      if (path.extname(file) === '.' + extension) {
        filteredFiles.push(file);
      }
    });

    callback(null, filteredFiles);
  });
};

// var fs = require('fs')  
// var path = require('path')  
 
// module.exports = function (dir, filterStr, callback) {  
 
//  fs.readdir(dir, function (err, list) {  
//    if (err)  
//      return callback(err)  
 
//    list = list.filter(function (file) {  
//      return path.extname(file) === '.' + filterStr  
//    })  
 
//    callback(null, list)  
//  })  
// }  








