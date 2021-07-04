const mongoose = require('mongoose');

const Linkedin = mongoose.Schema({
	user: {type: String, required: true},
	email: {type: String, required: true},
	package: {type: String, required: true},
	posts: {type: Number, required: true},
	connections: {type: Number, required: true},
	requests: {type: Number, required: true},
	gained: {type: Number, required: true},
	createdAt: {type: Date, required: true},
	updatedAt: {type: Date, required: true},
})
module.exports = mongoose.model('Linkdeln', Linkedin)
