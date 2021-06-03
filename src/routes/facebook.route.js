const router = require('express').Router();
const {FacebookController} = require('../controllers');

router.route('/').get(FacebookController.getDetails);
router.route('/all').get(FacebookController.getAll);

module.exports = router;