const catchAsync = require('../utils/catchAsync');
const {LoginService} = require('../services');

const getDetails = catchAsync(async (req, res) => {
	if (!req.body.hasOwnProperty('username') || !req.body.hasOwnProperty('password'))
		return await res.status(403).json({'error': 'username and password are required body parameters.'});
	const {username, password} = req.body;
	const data = await LoginService.getDetails(username, password)
	if (!data) return await res.status(401).json({error: 'Record not found!'});
	return await res.header('token', data).json({data: data});
});

module.exports = {getDetails};