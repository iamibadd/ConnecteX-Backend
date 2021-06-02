const {Facebook, Instagram} = require('../models');
const CsvParser = require('json2csv').Parser;

const generateReports = async (req) => {
	let reports = [];
	if (!req.query.hasOwnProperty('email'))
		return {status: 403, error: 'email is a required query parameters.'}
	const {email} = req.query;
	const facebook = await Facebook.find({email: email});
	if (facebook) {
		await facebook.forEach(obj => {
			const {id, email, package: pack, post_details, followers, posts, createdAt, updatedAt} = obj;
			reports.push({id, email, pack, post_details, followers, posts, createdAt, updatedAt});
		});
	}
	const instagram = await Instagram.find({email: email});
	if (instagram) {
		await instagram.forEach(obj => {
			const {id, email, package: pack, followers, followers_gained, follow_requests, createdAt, updatedAt} = obj;
			reports.push({id, email, pack, followers, followers_gained, follow_requests, createdAt, updatedAt});
		});
	}
	if (reports.length < 1) return {status: 401, error: 'Email not found!'}
	const csvFields = ["Id", "Email", "Package", "Posts", "Post Titles", "Followers",
		"Followers Gained", "Followers Requested", "CreatedAt", "UpdatedAt"];
	const csvParser = new CsvParser({csvFields});
	const csvData = csvParser.parse(reports);
	return {status: 200, data: csvData}
}

module.exports = {generateReports};