const jwt = require('jsonwebtoken');

module.exports = validateToken = async (req, res, next) => {
	const token = req.header('token')
	if (!token) return res.status(401).json({message: 'Access denied.'})
	try {
		req.user = await jwt.verify(token, process.env.TOKEN_KEY)
		next()
	} catch (e) {
		res.status(400).json({message: 'Invalid Token.'})
	}
}
