const router = require('express').Router();
const {ReportsController} = require('../controllers');

router.route('/').get(ReportsController.generateReports);

module.exports = router;