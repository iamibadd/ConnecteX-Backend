const router = require('express').Router();
const {InstagramController} = require('../controllers');

router.route('/').get(InstagramController.getDetails);

module.exports = router;