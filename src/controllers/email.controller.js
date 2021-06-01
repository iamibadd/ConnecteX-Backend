const catchAsync = require('../utils/catchAsync');
const {EmailService} = require('../services');

const confirmationEmail = catchAsync(async (req, res) => {
	const response = await EmailService.confirmationEmail(req);
	if (response.status !== 201) return res.status(response.status).json({error: response.error});
	return await res.status(response.status).json({data: response.data});
});

module.exports = {confirmationEmail};