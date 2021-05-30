const express = require('express');
const router = express.Router();
const Login = require('./login.route');
const Signup = require('./signup.route');
const User = require('./users.route');
const Instagram = require('./instagram.route');
const Facebook = require('./facebook.route');

const defaultRoutes = [
	{
		path: '/login',
		route: Login,
	},
	{
		path: '/signup',
		route: Signup,
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
];

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

module.exports = router;