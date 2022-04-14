const express = require("express");
const router = express.Router();
const controller = require("./Controller/controller");
const middleware = require("./Middleware/middleware");

router.get("/", controller.list);
router.get("/s/:name", controller.find);
router.post("/", middleware.requiareBodyName, controller.add);
router.delete("/", middleware.requiareQueryName, controller.destroy);
router.put("/", middleware.updateRequirement, controller.update);

module.exports = router;
