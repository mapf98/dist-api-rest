const express = require("express");
const router = express.Router();
const { verifyStartup } = require("./utils.controller");

router.get("/verify", verifyStartup);

module.exports = router;
