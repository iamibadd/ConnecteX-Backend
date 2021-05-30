const catchAsync = require('../utils/catchAsync');
const {SignUpService} = require('../services');
const {signup_validation} = require('../validation/signup');

const register = catchAsync(async (req, res) => {
	const {error} = signup_validation(req.body);
	if (error) return res.status(404).json(error.details[0].message);
	const {first_name, last_name, username, email, password} = req.body;
	const data = await SignUpService.register(first_name, last_name, username, email, password);
	return await res.status(201).json({data: data});
});

module.exports = {register};