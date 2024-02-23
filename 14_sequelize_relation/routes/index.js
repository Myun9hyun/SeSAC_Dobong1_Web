const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

//GET/
router.get("/", controller.main);

// GET /players
// router.get("/players", controller.getAllPlayer);

module.exports = router;
