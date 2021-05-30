const router = require('express').Router();
const {LoginController} = require('../controllers');

router.route('/').post(LoginController.getDetails);

module.exports = router;
