const catchAsync = require('../utils/catchAsync');
const {FacebookService} = require('../services');

const getDetails = catchAsync(async (req, res) => {
	const response = await FacebookService.getStats(req)
	if (response.status !== 200) return await res.status(response.status).json({error: response.error});
	return await res.status(response.status).json({data: response.data});
});
module.exports = {getDetails};