const router = require('express').Router();
const {FacebookController} = require('../controllers');

router.route('/').get(FacebookController.getDetails);

module.exports = router;