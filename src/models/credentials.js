const mongoose = require('mongoose');

const Credential = mongoose.Schema({
	username: {type: String, required: true},
	niche: {type: String, required: true},
	pack: {type: String, required: true},
	facebook: {type: String, required: true},
	facebook_password: {type: String, required: true},
	instagram: {type: String, required: true},
	instagram_password: {type: String, required: true},
	linkedin: {type: String, required: true},
	linkedin_password: {type: String, required: true},
	twitter: {type: String, required: true},
	twitter_password: {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.model('Credential', Credential)
