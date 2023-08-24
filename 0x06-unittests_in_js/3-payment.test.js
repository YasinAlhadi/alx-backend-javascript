const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

discribe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi use calculateNumber method', () => {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
        expect(spy.calledOnce).to.be.true;
        spy.restore();
    });
});
