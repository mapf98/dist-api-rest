const express = require("express");
const router = express.Router();
const facultiesRouter = require("./module/faculties/faculties.router")
const utilsRouter = require("./module/utils/utils.router");

router.use("/faculties", facultiesRouter);
router.use("/utils", utilsRouter);

module.exports = router;
