const router = require('express').Router();
const {AdminController} = require('../controllers');
const verify_token = require('../validation/validateToken');

router.route('/register').post(AdminController.register);
router.route('/login').post(AdminController.login);
router.route('/:username').post(verify_token, AdminController.dashboard);

module.exports = router;
