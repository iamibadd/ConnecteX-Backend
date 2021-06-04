const {Payment, User} = require('../models');
const {paymentValidation} = require('../validation/schemaValidation');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getPayments = async () => await Payment.find();

const confirmPayment = async (req) => {
	let user;
	const {error} = paymentValidation(req.body);
	if (error) return {status: 403, error: error.details[0].message};
	const {email, first_name, last_name, pack, card_number, amount, id} = req.body;
	try {
		await stripe.customers.create({
				email: email,
				name: first_name + last_name,
			})
			.then((customer) => {
				return stripe.paymentIntents.create({
					payment_method: id,
					amount: String(amount) + String('00'),
					description: `Connectex ${pack} Package Subscription.`,
					currency: 'USD',
					customer: customer.id
				});
			});
		user = await new Payment({
			email: email,
			package: pack,
			card_number: card_number,
			amount: amount,
		});
		await user.save();
		await User.findOneAndUpdate({email: email}, {$set: {payment: true}});
	} catch (error) {
		console.log("Error", error);
	}
	return {status: 201, data: user}

}

module.exports = {confirmPayment, getPayments};