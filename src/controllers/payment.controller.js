const catchAsync = require('../utils/catchAsync');
const {PaymentService} = require('../services');

const confirmationPayment = catchAsync(async (req, res) => {
	const response = await PaymentService.confirmPayment(req);
	if (response.status !== 201) return res.status(response.status).json({error: response.error});
	return await res.status(response.status).json({data: response.data});
});

const getPayment = catchAsync(async (req, res) => {
	const response = await PaymentService.getPayments();
	return await res.status(200).json({data: response});
});

module.exports = {confirmationPayment, getPayment};