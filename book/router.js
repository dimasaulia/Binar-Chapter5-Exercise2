const express = require("express");
const router = express.Router();
const controller = require("./controller/controller");

router.get("/", controller.index);
router.get("/list", controller.list);
router.post("/create", controller.createBook);

module.exports = router;
