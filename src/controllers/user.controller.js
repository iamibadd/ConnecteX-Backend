const catchAsync = require('../utils/catchAsync');
const {UserService} = require('../services');

const dashboard = catchAsync(async (req, res) => {
	if (!req.body.hasOwnProperty('username'))
		return await res.status(403).json({'error': 'username is a required body parameter.'});
	const {username} = req.params;
	if (req.body.username !== username) return res.status(401).json({error: 'Unauthorized user!'})
	const data = await UserService.dashboard(username);
	if (!data) return await res.status(401).json({error: 'User not found!'});
	return await res.status(200).json({data: data});
});

module.exports = {dashboard};