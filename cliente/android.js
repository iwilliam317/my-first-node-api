const http = require('http');

const options = {
  hostname: 'localhost',
  port: '3000',
  path: '/teste',  
  method: 'post',
  headers : {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
}

//Content-type
// let html_post = "name=william";  //x-www-form-urlenconded
let json_post = { name: 'william' } //json
let string_json_post = JSON.stringify(json_post)
console.log(`sending json: ${json_post}`);
console.log(`converting to string: ${string_json_post}`);
//make a request
let req = http.request(options, function(res){

  let buffer_body_response = [];

  res.on('data', function(chunk){
    //stores in array
    buffer_body_response.push(chunk);
  });

  res.on('end', function(){
    /*formats the buffer chunk into a readable content*/
    let body_response = Buffer.concat(buffer_body_response).toString();
    console.log(`receiving: ${body_response}`);
    console.log(`status code: ${res.statusCode}`);
  });

});
//sending data x-www-form-urlencoded 
//stringy converts json to string 
req.write(string_json_post);
req.end();