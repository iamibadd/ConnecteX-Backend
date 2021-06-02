const mongoose = require('mongoose');

const Facebook = mongoose.Schema({
	email: {type: String, required: true},
	package: {type: String, required: true},
	status: {type: String, default: 'Live', required: true},
	posts: {type: Number, required: true},
	friends: {type: String, required: true},
	createdAt: {type: Date, required: true},
	updatedAt: {type: Date, required: true},
})
module.exports = mongoose.model('Facebook', Facebook)
