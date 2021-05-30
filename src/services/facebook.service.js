const {Facebook} = require('../models');

const getStats = async (email, pack) => await Facebook.findOne({email: email, package: pack});

module.exports = {getStats};