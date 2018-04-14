const http = require('http');

http.get('http://localhost:3000', function(res){

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