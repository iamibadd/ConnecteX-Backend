const router = require('express').Router();
const {ReportsController} = require('../controllers');

router.route('/').get(ReportsController.generateReports);
router.route('/all').get(ReportsController.getAll);

module.exports = router;