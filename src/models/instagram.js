const mongoose = require('mongoose');

const Instagram = mongoose.Schema({
	username: {type: String, required: true},
	package: {type: String, required: true},
	status: {type: String, default: 'Live', required: true},
	followers: {type: Number, required: true},
	followers_gained: {type: Number, required: true},
	follow_requests: {type: Number, required: true},
	createdAt: {type: Date, required: true},
	updatedAt: {type: Date, required: true},
})
module.exports = mongoose.model('Instagram', Instagram)
