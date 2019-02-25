const User = require('../models/user');

exports.signup = (req, res, next) => {
    email = req.body.email;
    password = req.body.password;
    name = req.body.name;
};