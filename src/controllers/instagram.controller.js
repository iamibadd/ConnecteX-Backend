const catchAsync = require('../utils/catchAsync');
const {InstagramService} = require('../services');

const getDetails = catchAsync(async (req, res) => {
	const response = await InstagramService.getStats(req)
	if (response.status !== 200) return await res.status(response.status).json({error: response.error});
	return await res.status(response.status).json({data: response.data});
});
module.exports = {getDetails};