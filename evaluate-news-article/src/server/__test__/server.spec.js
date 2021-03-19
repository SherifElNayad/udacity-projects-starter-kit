// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'
const request = require('supertest')
const { app } = require('../index');
describe('Server Test', () => {
    // TODO: add your test cases to test server
    // HINT: Review
    //  1. https://www.npmjs.com/package/supertest
    //  2. https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6

    describe('POST /test', () => {
      it('should test the post?', async () => {
        const res = await request(app)
        .post("/test")
        .send({
          title: 'TEST MESSAGE',
          });
          
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('post')
      })
    })
})
