const mongoose = require('mongoose');

const Facebook = mongoose.Schema({
	email: {type: String, required: true},
	package: {type: String, required: true},
	post_details: {type: String, required: true},
	posts: {type: Number, required: true},
	createdAt: {type: Date, required: true},
	updatedAt: {type: Date, required: true},
})
module.exports = mongoose.model('Facebook', Facebook)
