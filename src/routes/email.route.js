const router = require('express').Router();
const {EmailController} = require('../controllers');

router.route('/confirm').post(EmailController.confirmationEmail);

module.exports = router;