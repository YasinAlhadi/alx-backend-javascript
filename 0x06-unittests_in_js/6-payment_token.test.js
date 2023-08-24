const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
    it('getPaymentTokenFromAPI returns the right token', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.include({ data: 'Successful response from the API' });
                done();
            });
    });
});
