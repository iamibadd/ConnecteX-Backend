const {Instagram} = require('../models');

const getStats = async (email, pack) => await Instagram.findOne({email: email, package: pack});

module.exports = {getStats};