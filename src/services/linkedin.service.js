const {Linkedin, LinkedinPosts} = require('../models');

const getStats = async (req) => {
	if (!req.query.hasOwnProperty('email'))
		return {status: 403, error: 'email is a required query parameters.'}
	const {email} = req.query;
	const linkedin = await Linkedin.findOne({email: email});
	const posts = await LinkedinPosts.find({email: email});
	if (!linkedin && posts.length < 1) return {status: 401, error: 'User not found!'}
	const data = {posts: posts, data: linkedin}
	return {status: 200, data: data}
}

const getAll = async () => {
	const linkedin = await Linkedin.find();
	const posts = await LinkedinPosts.find();
	return {linkedin: linkedin, posts: posts}
};

module.exports = {getStats, getAll};