const router = require('express').Router()
const Signup = require('../models/signup')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const verify_token = require('../validation/validateToken')
const {login_validation} = require('../validation/login')
router.post('/user/:username', verify_token, async (req, res) => {
    if (req.body.user !== req.params['username']) return res.status(401).json({'message': 'Unauthorized user!'})
    try {
        const users = await Signup.findOne({username: req.params['username']})
        console.log(req.user)
        res.status(200).json(users)
    } catch (e) {
        res.status(400).json({'message': e})
    }
})
router.post('/login', async (req, res) => {
    console.log(req.body)
    const {error} = login_validation(req.body)
    if (error) return res.status(404).json(error.details[0].message)
    const user = await Signup.findOne({username: req.body.username})
    if (!user) return res.status(400).json('Invalid credentials!')
    const password = await bcrypt.compare(req.body.password, user.password)
    if (!password) return res.status(400).json('Invalid credentials!')
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_KEY)
    res.header('token', token).json({'token': token})
})

module.exports = router
