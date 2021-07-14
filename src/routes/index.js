const express = require('express');
const router = express.Router();
const Admin = require('./admin.route');
const User = require('./users.route');
const Instagram = require('./instagram.route');
const Facebook = require('./facebook.route');
const Linkedin = require('./linkedin.route');
const Twitter = require('./twitter.route');
const Email = require('./email.route');
const Reports = require('./reports.route');

const defaultRoutes = [
	{
		path: '/admin',
		route: Admin,
	},
	{
		path: '/user',
		route: User,
	},
	{
		path: '/instagram',
		route: Instagram,
	},
	{
		path: '/facebook',
		route: Facebook,
	},
	{
		path: '/linkedin',
		route: Linkedin,
	},
	{
		path: '/twitter',
		route: Twitter,
	},
	{
		path: '/email',
		route: Email,
	},
	{
		path: '/reports',
		route: Reports,
	},
];

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

module.exports = router;