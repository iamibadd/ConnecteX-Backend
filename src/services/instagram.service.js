const {Instagram} = require('../models');

const getStats = async (req) => {
	if (!req.query.hasOwnProperty('username'))
		return {status: 403, error: 'username is a required query parameters.'}
	const {username} = req.query;
	const instagram = await Instagram.findOne({username: username});
	if (!instagram) return {status: 401, error: 'User not found!'}
	return {status: 200, data: instagram}
}

const getAll = async () => await Instagram.find();

module.exports = {getStats, getAll};