const http = require('http');

const options = {
  hostname: 'localhost',
  port: '3000',
  path: '/',  
  headers : {
    'Accept': 'application/json'
  }
}

http.get(options, function(res){

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