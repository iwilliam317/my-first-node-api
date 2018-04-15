const http = require('http');

const options = {
  hostname: 'localhost',
  port: '3000',
  path: '/',  
  method: 'post',
  headers : {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
}

//Content-type
let html_post = "name=william";  //x-www-form-urlenconded
let json_post = { name: 'william' } //json

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
//stringy converts json to string 
req.write(JSON.stringify(json_post));
req.end();