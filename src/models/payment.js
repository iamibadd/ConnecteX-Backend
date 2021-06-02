const mongoose = require('mongoose');

const Payment = mongoose.Schema({
	email: {type: String, required: true},
	package: {type: String, required: true},
	card_number: {type: Number, required: true},
	amount: {type: Number, required: true},
}, {timestamps: true});

module.exports = mongoose.model('Payment', Payment)
