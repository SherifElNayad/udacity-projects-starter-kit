
import 'babel-polyfill'
const request = require('supertest')
const { app } = require('../index');
describe('Server Test', () => {

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
