const {Signup} = require('../models');
const bcrypt = require('bcryptjs');

const register = async (first_name, last_name, username, email, password) => {
	if (await Signup.findOne({username: username})) return 'Username already exist.';
	if (await Signup.findOne({email: email})) return 'Email already exist.';
	const salt = await bcrypt.genSalt(10)
	const hashPassword = await bcrypt.hash(password, salt)
	const user = new Signup({
		first_name: first_name,
		last_name: last_name,
		username: username,
		email: email,
		password: hashPassword,
		confirm_password: hashPassword,
	});
	return await user.save();
};

module.exports = {register};