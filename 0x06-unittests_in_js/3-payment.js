// 3-payment.js
const Utils = require('./utils');

module.exports = function sendPaymentRequestToApi(totalAmount, totalShipping) {
	const result = utils.calculateNumber('SUM', totalAmount, totalShipping);
	console.log(`The total is: ${result}`);
	return result
};
