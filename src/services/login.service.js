const {Signup} = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getDetails = async (username, password) => {
	const user = await Signup.findOne({username: username});
	if (!user) return 'Invalid username!';
	const pass = await bcrypt.compare(password, user.password);
	if (!pass) return 'Invalid credentials!';
	return jwt.sign({_id: user._id}, process.env.TOKEN_KEY);
};

module.exports = {getDetails};