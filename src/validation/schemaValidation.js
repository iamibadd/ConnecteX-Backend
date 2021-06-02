const Joi = require('@hapi/joi')

const userValidation = body => {
	const schema = Joi.object({
		first_name: Joi.string().min(3).required(),
		last_name: Joi.string().min(3).required(),
		username: Joi.string().min(3).required(),
		email: Joi.string().email().required(),
		pack: Joi.string().required(),
		password: Joi.string().required(),
		confirm_password: Joi.any().equal(Joi.ref('password')).required().options({messages: {'any.only': 'Passwords must match!'}})
	})
	return schema.validate(body)
}

const adminValidation = body => {
	const schema = Joi.object({
		first_name: Joi.string().min(3).required(),
		last_name: Joi.string().min(3).required(),
		username: Joi.string().min(3).required(),
		email: Joi.string().email().required(),
		password: Joi.string().required(),
		confirm_password: Joi.any().equal(Joi.ref('password')).required().options({messages: {'any.only': 'Passwords must match!'}})
	})
	return schema.validate(body)
}

const paymentValidation = body => {
	const schema = Joi.object({
		email: Joi.string().email().required(),
		pack: Joi.string().required(),
		card_number: Joi.string().required().length(16),
		amount: Joi.number().required(),
	})
	return schema.validate(body)
}
module.exports = {userValidation, adminValidation, paymentValidation};
