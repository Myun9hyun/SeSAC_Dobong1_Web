const express = require("express");
const router = express.Router();
const controller = require("../controller/Clogin");

router.get("/login", controller.login);

module.exports = router;
