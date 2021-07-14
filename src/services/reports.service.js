const {Facebook, Instagram, FacebookPosts, Linkedin, LinkedinPosts, Twitter, TwitterPosts} = require('../models');
const CsvParser = require('json2csv').Parser;

const generateReports = async (req) => {
	let reports = [];
	if (!req.query.hasOwnProperty('user'))
		return {status: 403, error: 'user is a required query parameters.'}
	const {user} = req.query;
	const facebook = await Facebook.find({user: user});
	if (facebook) {
		await facebook.forEach(obj => {
			const {id, package: pack, posts, friends, createdAt, updatedAt} = obj;
			reports.push({
				'Id': id,
				'User': user,
				'Platform': 'Facebook',
				'Package': pack,
				'Friends': friends,
				'Posts': posts,
				'Created at': createdAt,
				'Updated at': updatedAt
			});
		});
	}
	const facebookPosts = await FacebookPosts.find({user: user});
	if (facebookPosts) {
		await facebookPosts.forEach(obj => {
			const {id, package: pack, post_details, createdAt, updatedAt} = obj;
			reports.push({
				'Id': id,
				'User': user,
				'Platform': 'Facebook',
				'Package': pack,
				'Post Details': post_details,
				'Created at': createdAt,
				'Updated at': updatedAt
			});
		});
	}
	const linkedin = await Linkedin.find({user: user});
	if (linkedin) {
		await linkedin.forEach(obj => {
			const {id, package: pack, posts, connections, gained, requests, createdAt, updatedAt} = obj;
			reports.push({
				'Id': id,
				'User': user,
				'Platform': 'Linkedin',
				'Package': pack,
				'Posts': posts,
				'Connections': connections,
				'Followers Gained': gained,
				'Follow Requests': requests,
				'Created at': createdAt,
				'Updated at': updatedAt
			});
		});
	}
	const linkedinPosts = await LinkedinPosts.find({user: user});
	if (linkedinPosts) {
		await linkedinPosts.forEach(obj => {
			const {id, package: pack, post_details, createdAt, updatedAt} = obj;
			reports.push({
				'Id': id,
				'User': user,
				'Platform': 'Linkedin',
				'Package': pack,
				'Post Details': post_details,
				'Created at': createdAt,
				'Updated at': updatedAt
			});
		});
	}
	const instagram = await Instagram.find({user: user});
	if (instagram) {
		await instagram.forEach(obj => {
			const {id, package: pack, followers, followers_gained, follow_requests, createdAt, updatedAt} = obj;
			reports.push({
				'Id': id,
				'User': user,
				'Platform': 'Instagram',
				'Package': pack,
				'Followers': followers,
				'Followers Gained': followers_gained,
				'Follow Requests': follow_requests,
				'Created at': createdAt,
				'Updated at': updatedAt
			});
		});
	}
	const twitter = await Twitter.find({user: user});
	if (twitter) {
		await twitter.forEach(obj => {
			const {id, user, package: pack, posts, followers, followers_gained, follow_requests, createdAt, updatedAt} = obj;
			reports.push({
				'Id': id,
				'User': user,
				'Platform': 'Twitter',
				'Package': pack,
				'Followers': followers,
				'Posts': posts,
				'Followers Gained': followers_gained,
				'Follow Requests': follow_requests,
				'Created at': createdAt,
				'Updated at': updatedAt
			});
		});
	}
	const twitterPosts = await TwitterPosts.find({user: user});
	if (twitterPosts) {
		await twitterPosts.forEach(obj => {
			const {id, user, package: pack, post_details, createdAt, updatedAt} = obj;
			reports.push({
				'Id': id,
				'User': user,
				'Platform': 'Twitter',
				'Package': pack,
				'Post Details': post_details,
				'Created at': createdAt,
				'Updated at': updatedAt
			});
		});
	}
	if (reports.length < 1) return {status: 401, error: 'Email not found!'}
	const csvFields = ["Id", "Email", "Platform", "Package", "Posts", "Post Details", "Followers",
		"Followers Gained", "Follow Requests", "Created at", "Updated at"];
	const csvParser = new CsvParser({csvFields});
	const csvData = csvParser.parse(reports);
	return {status: 200, data: csvData}
}

const getAll = async () => {
	let reports = [];
	const facebook = await Facebook.find();
	if (facebook) {
		await facebook.forEach(obj => {
			const {id, user, package: pack, posts, friends, createdAt, updatedAt} = obj;
			reports.push({
				'Id': id,
				'User': user,
				'Platform': 'Facebook',
				'Package': pack,
				'Friends': friends,
				'Posts': posts,
				'Created at': createdAt,
				'Updated at': updatedAt
			});
		});
	}
	const facebookPosts = await FacebookPosts.find();
	if (facebookPosts) {
		await facebookPosts.forEach(obj => {
			const {id, user, package: pack, post_details, createdAt, updatedAt} = obj;
			reports.push({
				'Id': id,
				'User': user,
				'Platform': 'Facebook',
				'Package': pack,
				'Post Details': post_details,
				'Created at': createdAt,
				'Updated at': updatedAt
			});
		});
	}
	const linkedin = await Linkedin.find();
	if (linkedin) {
		await linkedin.forEach(obj => {
			const {id, user, package: pack, posts, connections, gained, requests, createdAt, updatedAt} = obj;
			reports.push({
				'Id': id,
				'User': user,
				'Platform': 'Linkedin',
				'Package': pack,
				'Posts': posts,
				'Connections': connections,
				'Followers Gained': gained,
				'Follow Requests': requests,
				'Created at': createdAt,
				'Updated at': updatedAt
			});
		});
	}
	const linkedinPosts = await LinkedinPosts.find();
	if (linkedinPosts) {
		await linkedinPosts.forEach(obj => {
			const {id, user, package: pack, post_details, createdAt, updatedAt} = obj;
			reports.push({
				'Id': id,
				'User': user,
				'Platform': 'Linkedin',
				'Package': pack,
				'Post Details': post_details,
				'Created at': createdAt,
				'Updated at': updatedAt
			});
		});
	}
	const instagram = await Instagram.find();
	if (instagram) {
		await instagram.forEach(obj => {
			const {id, user, package: pack, followers, followers_gained, follow_requests, createdAt, updatedAt} = obj;
			reports.push({
				'Id': id,
				'User': user,
				'Platform': 'Instagram',
				'Package': pack,
				'Followers': followers,
				'Followers Gained': followers_gained,
				'Follow Requests': follow_requests,
				'Created at': createdAt,
				'Updated at': updatedAt
			});
		});
	}
	const twitter = await Twitter.find();
	if (twitter) {
		await twitter.forEach(obj => {
			const {id, user, package: pack, posts, followers, followers_gained, follow_requests, createdAt, updatedAt} = obj;
			reports.push({
				'Id': id,
				'User': user,
				'Platform': 'Twitter',
				'Package': pack,
				'Followers': followers,
				'Posts': posts,
				'Followers Gained': followers_gained,
				'Follow Requests': follow_requests,
				'Created at': createdAt,
				'Updated at': updatedAt
			});
		});
	}
	const twitterPosts = await TwitterPosts.find();
	if (twitterPosts) {
		await twitterPosts.forEach(obj => {
			const {id, user, package: pack, post_details, createdAt, updatedAt} = obj;
			reports.push({
				'Id': id,
				'User': user,
				'Platform': 'Twitter',
				'Package': pack,
				'Post Details': post_details,
				'Created at': createdAt,
				'Updated at': updatedAt
			});
		});
	}
	if (reports.length < 1) return {status: 401, error: 'Email not found!'}
	const csvFields = ["Id", "User", "Platform", "Package", "Posts", "Post Details", "Followers",
		"Followers Gained", "Follow Requests", "Created at", "Updated at"];
	const csvParser = new CsvParser({csvFields});
	const csvData = csvParser.parse(reports);
	return {status: 200, data: csvData}
}

module.exports = {generateReports, getAll};