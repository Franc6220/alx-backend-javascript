// 3-payment.js
const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totslShipping) {
	const result = Utils.calculateNumber('SUM', totalAmount, TotalShipping);
	console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
