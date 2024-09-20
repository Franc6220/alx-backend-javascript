// 3-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
	it('should call Utils.calculateNumber with the correct arguments', function () {
		const spy = sinon.spy(Utils, 'calculateNumber');
		sendPaymentRequestToApi(100, 20);

		sinon.assert.calledOnce(spy);
		sinon.assert.calledWith(spy, 'SUM', 100, 20);

		// Restore the original function
		spy.restore();
	});
});
