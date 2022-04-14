const express = require("express");
const router = express.Router();
const kategori = require("./Kategori/router");

router.use("/kategori", kategori);

module.exports = router;
