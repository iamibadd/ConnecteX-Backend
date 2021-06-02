const router = require('express').Router();
const {UserController, PaymentController} = require('../controllers');
const verify_token = require('../validation/validateToken');

router.route('/register').post(UserController.register);
router.route('/login').post(UserController.login);
router.route('/payment').post(PaymentController.confirmationPayment);
router.route('/:username').post(verify_token, UserController.dashboard);

module.exports = router;