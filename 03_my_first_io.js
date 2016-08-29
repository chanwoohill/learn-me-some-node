const fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var newlines = str.split("\n");
console.log(newlines.length - 1); 
// console.log(str)

// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1  