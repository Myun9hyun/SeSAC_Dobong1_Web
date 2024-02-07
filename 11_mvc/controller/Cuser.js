const User = require("../model/User");

exports.user = (req, res) => {
  render("user", { userOnfp: User.userInfo() });
};
