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

    it('POST /login', (done) => {
        request.post('http://localhost:7865/login', { form: { userName: 'Yasin' } }, (error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome Yasin');
            done();
        });
    });

    it('GET /available_payments', (done) => {
        request.get('http://localhost:7865/available_payments', (error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            expect(body).to.be.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
            done();
        });
    });
});