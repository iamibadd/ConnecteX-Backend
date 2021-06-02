const catchAsync = require('../utils/catchAsync');
const {UserService} = require('../services');

const register = catchAsync(async (req, res) => {
	const response = await UserService.register(req);
	if (response.status !== 201) return res.status(response.status).json({error: response.error});
	return await res.status(response.status).json({data: response.data});
});

const login = catchAsync(async (req, res) => {
	const response = await UserService.login(req);
	if (response.status !== 201) return res.status(response.status).json({error: response.error});
	return await res.status(response.status).json({data: response.data});
});

const dashboard = catchAsync(async (req, res) => {
	const response = await UserService.dashboard(req);
	if (response.status !== 201) return res.status(response.status).json({error: response.error});
	return await res.status(response.status).json({data: response.data});
});

module.exports = {login, register, dashboard};