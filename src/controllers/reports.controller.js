const catchAsync = require('../utils/catchAsync');
const {ReportsService} = require('../services');
const date = new Date().toJSON().slice(0, 10);

const generateReports = catchAsync(async (req, res) => {
	const response = await ReportsService.generateReports(req);
	if (response.status !== 200) return await res.status(response.status).json({error: response.error});
	await res.setHeader("Content-Type", "text/csv");
	await res.setHeader("Content-Disposition", `attachment; filename=reports (${date}).csv`);
	return await res.status(response.status).send(response.data);
});

module.exports = {generateReports};