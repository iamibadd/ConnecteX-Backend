const mongoose = require('mongoose');

const Twitter = mongoose.Schema({
	user: {type: String, required: true},
	username: {type: String, required: true},
	package: {type: String, required: true},
	status: {type: String, default: 'Live', required: true},
	posts: {type: Number, required: true},
	followers: {type: Number, required: true},
	followers_gained: {type: Number, required: true},
	follow_requests: {type: Number, required: true},
	createdAt: {type: Date, required: true},
	updatedAt: {type: Date, required: true},
})
module.exports = mongoose.model('Twitter', Twitter)
