const mongoose = require('mongoose');

const Admin = mongoose.Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	username: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	confirm_password: {type: String, required: true},
}, {timestamps: true})
//'Users_Schema' will display in mongodb as 'users_schemas
module.exports = mongoose.model('Admin', Admin)
