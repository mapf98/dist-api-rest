const express = require("express");
const router = express.Router();
const facultiesRouter = require("./module/faculties/faculties.router")
const utilsRouter = require("./module/utils/utils.router");
const schoolsRouter = require("./module/schools/schools.router");
const sectionsRouter = require("./module/sections/sections.router");
const personsRouter = require("./module/persons/persons.router");

router.use("/faculties", facultiesRouter);
router.use("/utils", utilsRouter);
router.use("/schools", schoolsRouter);
router.use("/sections", sectionsRouter);
router.use("/persons", personsRouter);

module.exports = router;
