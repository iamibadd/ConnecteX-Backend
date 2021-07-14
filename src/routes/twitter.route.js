const router = require('express').Router();
const {TwitterController} = require('../controllers');

router.route('/').get(TwitterController.getDetails);
router.route('/all').get(TwitterController.getAll);

module.exports = router;