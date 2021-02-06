const express = require("express");
const router = express.Router();
const utilsRouter = require("./module/utils/utils.router");
const schoolsRouter = require("./module/schools/schools.router");
const personsRouter = require("./module/persons/persons.router");

router.use("/utils", utilsRouter);
router.use("/schools", schoolsRouter);
router.use("/persons", personsRouter);

module.exports = router;
