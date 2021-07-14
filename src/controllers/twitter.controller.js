const catchAsync = require('../utils/catchAsync');
const {TwitterService} = require('../services');

const getDetails = catchAsync(async (req, res) => {
	const response = await TwitterService.getStats(req)
	if (response.status !== 200) return await res.status(response.status).json({error: response.error});
	return await res.status(response.status).json({data: response.data});
});

const getAll = catchAsync(async (req, res) => {
	const response = await TwitterService.getAll();
	return await res.status(200).json({data: response});
});

module.exports = {getDetails, getAll};