const {User} = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {userValidation} = require('../validation/schemaValidation');

const register = async (req) => {
	const {error} = userValidation(req.body);
	if (error) return {status: 403, error: error.details[0].message};
	const {first_name, last_name, username, email, pack, password} = req.body;
	if (await User.findOne({username: username})) return {status: 403, error: 'Username already exist.'};
	if (await User.findOne({email: email})) return {status: 403, error: 'Email already exist.'};
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(password, salt);
	const user = new User({
		first_name: first_name,
		last_name: last_name,
		username: username,
		email: email,
		package: pack,
		password: hashPassword,
		confirm_password: hashPassword,
	});
	await user.save();
	return {status: 201, data: user}
};

const login = async (req) => {
	if (!req.body.hasOwnProperty('username') || !req.body.hasOwnProperty('password'))
		return {status: 403, error: 'username and password are required body parameters.'}
	const {username, password} = req.body;
	const user = await User.findOne({username: username});
	if (!user) return {status: 403, error: 'Invalid username.'}
	const pass = await bcrypt.compare(password, user.password);
	if (!pass) return {status: 403, error: 'Invalid password.'}
	return {status: 201, data: jwt.sign({_id: user._id}, process.env.TOKEN_KEY)};
};

const dashboard = async (req) => {
	if (!req.body.hasOwnProperty('username'))
		return {status: 403, error: 'username is a required body parameter.'};
	const {username} = req.params;
	if (req.body.username !== username) return {status: 401, error: 'Unauthorized user!'};
	const user = await User.findOne({username: username});
	return {status: 201, data: user};
}

module.exports = {login, register, dashboard};