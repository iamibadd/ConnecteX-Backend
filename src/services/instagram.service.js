const {Instagram} = require('../models');

const getStats = async (req) => {
	if (!req.query.hasOwnProperty('email'))
		return {status: 403, error: 'email is a required query parameters.'}
	const {email} = req.query;
	const instagram = await Instagram.findOne({email: email});
	if (!instagram) return {status: 401, error: 'User not found!'}
	return {status: 200, data: instagram}
}

const getAll = async () => await Instagram.find();

module.exports = {getStats, getAll};