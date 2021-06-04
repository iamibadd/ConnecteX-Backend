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

const getUsers = catchAsync(async (req, res) => {
	const response = await UserService.getUsers();
	return await res.status(200).json({data: response});
});

const cancelSubscription = catchAsync(async (req, res) => {
	const response = await UserService.cancelSubscription(req);
	if (response.status !== 201) return res.status(response.status).json({error: response.error});
	return await res.status(response.status).json({data: response.data});
});

const deleteUser = catchAsync(async (req, res) => {
	const response = await UserService.deleteUser(req);
	if (response.status !== 200) return res.status(response.status).json({error: response.error});
	return await res.status(response.status).json({data: response.data});
});

const saveCredentials = catchAsync(async (req, res) => {
	const response = await UserService.saveCredentials(req);
	if (response.status !== 201) return res.status(response.status).json({error: response.error});
	return await res.status(response.status).json({data: response.data});
});

const getCredentials = catchAsync(async (req, res) => {
	const response = await UserService.getCredentials(req);
	return await res.status(200).json({data: response});
});

module.exports = {
	login,
	register,
	dashboard,
	getUsers,
	cancelSubscription,
	deleteUser,
	saveCredentials,
	getCredentials
};