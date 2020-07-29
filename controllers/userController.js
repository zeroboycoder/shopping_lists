const User = require("../models/user");

exports.getUser = (req, res, next) => {
    User.findById(req.user._id)
    .select("-password")
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json(err))
}