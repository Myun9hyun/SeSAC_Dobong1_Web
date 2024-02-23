const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

router.get("/", controller.main);
router.get("/visitors", controller.getVisitors);

// 등록, 삭제, 수정
router.post("visitor", controller.postVisitor);
router.delete("visitor", controller.deleteVisitor);
// router.patch("visitor", controller.patchVisitor);

module.exports = router;
