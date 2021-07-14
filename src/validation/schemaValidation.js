const Joi = require('@hapi/joi')

const userValidation = body => {
	const schema = Joi.object({
		first_name: Joi.string().min(3).required(),
		last_name: Joi.string().min(3).required(),
		username: Joi.string().min(3).required(),
		email: Joi.string().email().required(),
		pack: Joi.string().required(),
		password: Joi.string().required().min(8),
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
		password: Joi.string().required().min(8),
		confirm_password: Joi.any().equal(Joi.ref('password')).required().options({messages: {'any.only': 'Passwords must match!'}})
	})
	return schema.validate(body)
}

const paymentValidation = body => {
	const schema = Joi.object({
		id: Joi.string().required(),
		first_name: Joi.string().required(),
		last_name: Joi.string().required(),
		email: Joi.string().email().required(),
		pack: Joi.string().required(),
		amount: Joi.number().required(),
	})
	return schema.validate(body)
}

const credentialsValidation = body => {
	const schema = Joi.object({
		username: Joi.string().required(),
		user: Joi.string().required(),
		niche: Joi.string().required(),
		pack: Joi.string().required(),
		facebook: Joi.string().required(),
		facebook_password: Joi.string().required(),
		instagram: Joi.string().required(),
		instagram_password: Joi.string().required(),
		twitter: Joi.string().required(),
		twitter_password: Joi.string().required(),
		linkedin: Joi.string().required(),
		linkedin_password: Joi.string().required(),
	})
	return schema.validate(body)
}

module.exports = {userValidation, adminValidation, paymentValidation, credentialsValidation};
