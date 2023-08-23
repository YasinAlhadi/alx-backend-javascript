const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function () {
    let consoleSpy;
    beforeEach(function () {
        consoleSpy = sinon.spy(console, 'log');
    });
    afterEach(function () {
        consoleSpy.restore();
    });
    it('validate the usage of the Utils function', function () {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });
});