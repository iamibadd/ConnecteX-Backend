const {User, Credential, Facebook, Linkedin, Instagram, Twitter} = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {userValidation, credentialsValidation} = require('../validation/schemaValidation');
const date = new Date();

const register = async (req) => {
	const {error} = userValidation(req.body);
	if (error) return {status: 403, error: error.details[0].message};
	const {first_name, last_name, username, email, pack, password} = req.body;
	if (await User.findOne({username: username})) return {status: 403, error: 'Username already exist.'};
	if (await User.findOne({email: email})) return {status: 403, error: 'Email already exist.'};
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(password, salt);
	const user = new User({
		first_name: first_name,
		last_name: last_name,
		username: username,
		email: email,
		package: pack,
		password: hashPassword,
		confirm_password: hashPassword,
	});
	await user.save();
	return {status: 201, data: user}
};

const login = async (req) => {
	if (!req.body.hasOwnProperty('username') || !req.body.hasOwnProperty('password'))
		return {status: 403, error: 'username and password are required body parameters.'}
	const {username, password} = req.body;
	const user = await User.findOne({username: username, status: 'Live'});
	if (!user) return {status: 403, error: 'Invalid username.'}
	const pass = await bcrypt.compare(password, user.password);
	if (!pass) return {status: 403, error: 'Invalid password.'}
	return {status: 201, data: jwt.sign({_id: user._id}, process.env.TOKEN_KEY)};
};

const dashboard = async (req) => {
	if (!req.body.hasOwnProperty('username'))
		return {status: 403, error: 'username is a required query parameter.'};
	const {username} = req.params;
	if (req.body.username !== username) return {status: 401, error: 'Unauthorized user!'};
	const user = await User.findOne({username: username});
	return {status: 201, data: user};
}

const getUsers = async () => {
	const activeUsers = await User.find({status: 'Live'});
	const notActiveUsers = await User.find({status: 'Done'});
	return {active: activeUsers, notActive: notActiveUsers}
};

const cancelSubscription = async (req) => {
	if (!req.body.hasOwnProperty('email'))
		return {status: 403, error: 'email is a required body parameter.'};
	const {email} = req.body;
	await User.findOneAndUpdate({email: email}, {$set: {status: 'Done'}});
	return {status: 201, data: "Subscription cancelled."}
};

const deleteUser = async (req) => {
	if (!req.body.hasOwnProperty('email'))
		return {status: 403, error: 'email is a required body parameter.'};
	const {email} = req.body;
	await User.findOneAndDelete({email: email});
	return {status: 200, data: "User deleted."}
};

const saveCredentials = async (req) => {
	const {error} = credentialsValidation(req.body);
	if (error) return {status: 403, error: error.details[0].message};
	const {
		username, niche, user, pack, facebook, facebook_password, instagram, instagram_password,
		linkedin, linkedin_password, twitter, twitter_password
	} = req.body;
	const credentials = new Credential({
		username, niche, pack, facebook, facebook_password, instagram, instagram_password, linkedin, linkedin_password,
		twitter, twitter_password
	});
	await User.findOneAndUpdate({username: username}, {$set: {credentials: true}});
	await Facebook({
		user: user, package: pack, email: facebook, posts: 0, friends: 0, createdAt: date, updatedAt: date
	}).save();
	await Instagram({
		user: user, package: pack, username: instagram, followers: 0, followers_gained: 0,
		follow_requests: 0, createdAt: date, updatedAt: date
	}).save();
	await Linkedin({
		user: user, package: pack, email: linkedin, posts: 0, connections: 0, requests: 0,
		gained: 0, createdAt: date, updatedAt: date
	}).save();
	await Twitter({
		user: user, package: pack, username: twitter, posts: 0, followers: 0, followers_gained: 0, follow_requests: 0,
		createdAt: date, updatedAt: date
	}).save();
	await credentials.save();
	return {status: 201, data: credentials}
};

const getCredentials = async (req) => await Credential.findOne({username: req.query.username});

module.exports = {
	login,
	register,
	dashboard,
	getUsers,
	cancelSubscription,
	deleteUser,
	saveCredentials,
	getCredentials
};