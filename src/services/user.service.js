const {Signup} = require('../models');

const dashboard = async (username) => await Signup.findOne({username: username});

module.exports = {dashboard};