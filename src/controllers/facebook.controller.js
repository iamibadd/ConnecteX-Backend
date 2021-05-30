const catchAsync = require('../utils/catchAsync');
const {FacebookService} = require('../services');

const getDetails = catchAsync(async (req, res) => {
	if (!req.query.hasOwnProperty('email') || !req.query.hasOwnProperty('pack'))
		return await res.status(403).json({'error': 'email and pack are required query parameters.'});
	const {email, pack} = req.query;
	const data = await FacebookService.getStats(email, pack)
	if (!data) return await res.status(401).json({error: 'Record not found!'});
	return await res.status(200).json({data: data});
});
module.exports = {getDetails};