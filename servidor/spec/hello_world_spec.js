const request = require("request");
const helloWorld = require("../app.js")
const base_url = "http://localhost:3000/"

describe('Hello World Test', () => {

  describe("GET /", function() {

    it('returns status code 200', (done) => {
      request.get(base_url, (error, response, body) => {
        request.contentType = "text/html";
        expect(response.statusCode).toBe(200);
               //to avoid synchronous problem
        done();
      })
    })

    it('returns Bem vindo a sua app NodeJS!', (done) => {
      request.get(base_url, (error, response, body) => {
        expect(body).toEqual('Bem vindo a sua app NodeJS!');
        // helloWorld.closeServer();
        //to make sure expect function runs before our it function finishes
        done();
      })
    })

  });

  describe('POST /', () => {
    it('returns status code 200 ', () => {
      request.post(base_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
      }); 
      
    })

    xit('returns {"name":"william"}', (done) => {
      request.post({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url: 'http://localhost:3000/',
        body: {"name":"william"}
      }, (error, response, body) => {
        // expect(body).toBe('{"name":"william"}');
        //console.log(body)
      })
    })
  })
})