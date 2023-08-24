const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi use calculateNumber method', () => {
        const spy = sinon.spy(console, 'log');
        const stub = sinon.stub(Utils, 'calculateNumber');
        stub.returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spy.calledWithExactly('The total is: 10')).to.be.true;
        spy.restore();
        stub.restore();
    });
});
