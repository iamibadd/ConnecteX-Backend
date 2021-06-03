const router = require('express').Router();
const {UserController, PaymentController} = require('../controllers');
const verify_token = require('../validation/validateToken');

router.route('/register').post(UserController.register);
router.route('/login').post(UserController.login);
router.route('/all').get(UserController.getUsers);
router.route('/cancel-subscription').post(UserController.cancelSubscription);
router.route('/delete').delete(UserController.deleteUser);
router.route('/payment').post(PaymentController.confirmationPayment);
router.route('/payment/all').get(PaymentController.getPayment);
router.route('/:username').post(verify_token, UserController.dashboard);

module.exports = router;