const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', () => {
    let spy;
    beforeEach(() => {
        spy = sinon.spy(console, 'log');
    });
    afterEach(() => {
        spy.restore();
    });

    it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledWithExactly('The total is: 120')).to.be.true;
        expect(spy.calledOnce).to.be.true;
    });

    it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
        sendPaymentRequestToApi(10, 10);
        expect(spy.calledWithExactly('The total is: 20')).to.be.true;
        expect(spy.calledOnce).to.be.true;
    });
});
