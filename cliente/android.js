const http = require('http');

const options = {
  hostname: 'localhost',
  port: '3000',
  path: '/',  
  method: 'post',
  headers : {
    'Accept': 'application/json',
    'Content-type': 'application/x-www-form-urlencoded'
  }
}

let html_post = "name=william";
let req = http.request(options, function(res){

  let buffer_body_response = [];

  res.on('data', function(chunk){
    buffer_body_response.push(chunk);
  });

  res.on('end', function(){
    /*formats the buffer chunk into a readable content*/
    let body_response = Buffer.concat(buffer_body_response).toString();
    console.log(body_response);
  });

});
//sending data x-www-form-urlencoded 
req.write(html_post);
req.end();