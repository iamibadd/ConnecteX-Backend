const router = require('express').Router();
const {LinkedinController} = require('../controllers');

router.route('/').get(LinkedinController.getDetails);
router.route('/all').get(LinkedinController.getAll);

module.exports = router;