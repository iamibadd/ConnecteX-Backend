const {Facebook} = require('../models');

const getStats = async (req) => {
	if (!req.query.hasOwnProperty('email'))
		return {status: 403, error: 'email is a required query parameters.'}
	const {email} = req.query;
	const facebook = await Facebook.findOne({email: email});
	if (!facebook) return {status: 401, error: 'User not found!'}
	return {status: 200, data: facebook}
}

module.exports = {getStats};