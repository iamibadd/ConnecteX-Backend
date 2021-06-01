const mongoose = require('mongoose');

const User = mongoose.Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	username: {type: String, required: true},
	email: {type: String, required: true},
	package: {type: String, default: 'Silver', required: true},
	status: {type: String, default: 'Live', required: true},
	password: {type: String, required: true},
	confirm_password: {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.model('User', User)
