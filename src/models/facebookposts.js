const mongoose = require('mongoose');

const FacebookPost = mongoose.Schema({
	user: {type: String, required: true},
	email: {type: String, required: true},
	package: {type: String, required: true},
	post_details: {type: String, required: true},
	createdAt: {type: Date, required: true},
	updatedAt: {type: Date, required: true},
})
module.exports = mongoose.model('Facebookpost', FacebookPost)
