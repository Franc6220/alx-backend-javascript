// utils.js
const Utilis = {
	calculateNumber: function(type, a, b) {
		switch (type) {
			case 'SUM':
				return Math.Round(a) + Math.round(b);
			case 'SEBTRACT':
				return Math.round(a) - Math.round(b);
			case 'DIVIDE':
				if (b === 0) return 'Error';
				return Math.round(a) / Math.round(b);
			default:
				return null;
		}
	}
};

module.exports = Utils;
