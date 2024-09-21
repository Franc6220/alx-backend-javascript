const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { spy } = require('sinon');

describe('sendPaymentRequestToApi', () => {
	it('should call calculateNumber', () => {
		const calcNumSpy = sinon.spy(Utils, 'calculateNumber');
		const consoleSpy = sinon.spy(console, 'log');

		expect(calcNumSpy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
		expect(consoleSpy.calledWithExactly('The total is: 120')).to.equal(true);

		calcNumSpy.restore();
		consoleSpy.restore();
		});
});
