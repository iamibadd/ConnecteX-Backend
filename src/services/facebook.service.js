const {Facebook, FacebookPosts} = require('../models');

const getStats = async (req) => {
	if (!req.query.hasOwnProperty('email'))
		return {status: 403, error: 'email is a required query parameters.'}
	const {email} = req.query;
	const facebook = await Facebook.findOne({email: email});
	const posts = await FacebookPosts.find({email: email});
	if (!facebook && posts.length < 1) return {status: 401, error: 'User not found!'}
	const data = {posts: posts, data: facebook}
	return {status: 200, data: data}
}

module.exports = {getStats};