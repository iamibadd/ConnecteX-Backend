const router = require('express').Router();
const {InstagramController} = require('../controllers');

router.route('/').get(InstagramController.getDetails);
router.route('/all').get(InstagramController.getAll);

module.exports = router;