const router = require('express').Router();
const {SignUpController} = require('../controllers');

router.route('/').post(SignUpController.register);

module.exports = router
