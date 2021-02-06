const express = require("express");
const router = express.Router();
const utilsRouter = require("./module/utils/utils.router");

router.use("/utils", utilsRouter);

module.exports = router;
