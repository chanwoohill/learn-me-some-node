var http = require('http');
var url = process.argv[2];

http.get(url, (res) => {
  res.setEncoding('utf8');
  // console.log(`Got response: ${res.statusCode}`);
  res.on('data', function (data) {
    console.log(data);
  });
  // consume response body
  res.resume();
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});




// var http = require('http')  
 
// http.get(process.argv[2], function (response) {  
//  response.setEncoding('utf8')  
//  response.on('data', console.log)  
//  response.on('error', console.error)  
// }).on('error', console.error)  

