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

})