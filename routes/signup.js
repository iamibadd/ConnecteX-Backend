const router = require('express').Router()
const Signup = require('../models/signup')
const {signup_validation} = require('../validation/signup')
const bcrypt = require('bcryptjs')
router.post('', async (req, res) => {
    console.log(req.body)
    const {error} = signup_validation(req.body)
    if (error) return res.status(404).json(error.details[0].message)
    if (await Signup.findOne({username: req.body.username})) return res.status(400).json('Username already exist.')
    if (await Signup.findOne({email: req.body.email})) return res.status(400).json('Email already exist.')
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    const user = new Signup({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
        confirm_password: hashPassword,
    })
    try {
        const save_user = await user.save()
        res.status(200).json(save_user)
    } catch (error) {
        res.status(404).json(error)
    }
})
module.exports = router
