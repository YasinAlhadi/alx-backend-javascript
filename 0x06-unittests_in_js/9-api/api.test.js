const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('API test', () => {
    it('GET /', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });

    it('GET /cart/:id', (done) => {
        request.get('http://localhost:7865/cart/12', (error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 12');
            done();
        });
    });

    it('GET /cart/:isNaN', (done) => {
        request.get('http://localhost:7865/cart/anything', (error, response, body) => {
            expect(response.statusCode).to.be.equal(404);
            done();
        });
    });
});