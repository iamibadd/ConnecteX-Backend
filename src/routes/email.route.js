const router = require('express').Router();
const {EmailController} = require('../controllers');

router.route('/confirm').post(EmailController.confirmationEmail);
router.route('/payment').post(EmailController.paymentEmail);

module.exports = router;