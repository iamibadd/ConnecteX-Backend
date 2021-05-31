const catchAsync = require('../utils/catchAsync');
const {AdminService} = require('../services');

const register = catchAsync(async (req, res) => {
	const response = await AdminService.register(req);
	if (response.status !== 201) return res.status(response.status).json({error: response.error});
	return await res.status(response.status).json({data: response.data});
});

const login = catchAsync(async (req, res) => {
	const response = await AdminService.login(req);
	if (response.status !== 201) return res.status(response.status).json({error: response.error});
	return await res.status(response.status).json({data: response.data});
});

const dashboard = catchAsync(async (req, res) => {
	const response = await AdminService.dashboard(req);
	if (response.status !== 201) return res.status(response.status).json({error: response.error});
	return await res.status(response.status).json({data: response.data});
});

module.exports = {register, login, dashboard};