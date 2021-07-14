const {Twitter, TwitterPosts} = require('../models');

const getStats = async (req) => {
	if (!req.query.hasOwnProperty('username'))
		return {status: 403, error: 'username is a required query parameters.'}
	const {username} = req.query;
	const twitter = await Twitter.findOne({username: username});
	const posts = await TwitterPosts.find({username: username});
	if (!twitter && posts.length < 1) return {status: 401, error: 'User not found!'}
	const data = {posts: posts, data: twitter}
	return {status: 200, data: data}
}

const getAll = async () => {
	const twitter = await Twitter.find();
	const posts = await TwitterPosts.find();
	return {twitter: twitter, posts: posts}
};

module.exports = {getStats, getAll};