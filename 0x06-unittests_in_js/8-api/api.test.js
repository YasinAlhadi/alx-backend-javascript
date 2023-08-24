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
});