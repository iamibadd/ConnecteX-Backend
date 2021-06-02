const {Payment, User} = require('../models');
const {paymentValidation} = require('../validation/schemaValidation');

const confirmPayment = async (req) => {
	const {error} = paymentValidation(req.body);
	if (error) return {status: 403, error: error.details[0].message};
	const {email, pack, card_number, amount} = req.body;
	const user = new Payment({
		email: email,
		package: pack,
		card_number: card_number,
		amount: amount,
	});
	await user.save();
	await User.findOneAndUpdate({email: email}, {$set: {payment: true}});
	return {status: 201, data: user}
}

module.exports = {confirmPayment};