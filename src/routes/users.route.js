const router = require('express').Router();
const {UserController} = require('../controllers');
const verify_token = require('../validation/validateToken');

router.route('/:username').post(verify_token, UserController.dashboard);

module.exports = router;