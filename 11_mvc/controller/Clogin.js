const Login = require("../model/User");
exports.login = (req, res) => {
  console.log(User.userInfo());

  const { id: clientId, pw: clientPw } = req.body;
  console.log(clientPw);
  if (clientId === Login.userInfo().id && clientPw === Login.userInfo().pw) {
    res.send({
      userInfo: req.body,
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false });
  }
};
