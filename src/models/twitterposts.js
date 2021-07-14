const mongoose = require('mongoose');

const TwitterPost = mongoose.Schema({
	user: {type: String, required: true},
	username: {type: String, required: true},
	package: {type: String, required: true},
	post_details: {type: String, default:''},
	createdAt: {type: Date, required: true},
	updatedAt: {type: Date, required: true},
})
module.exports = mongoose.model('TwitterPost', TwitterPost)
