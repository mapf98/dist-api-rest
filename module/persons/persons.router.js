const express = require("express");
const router = express.Router();
const { getPersons, createPerson } = require("./persons.controller");

router.get("/", getPersons);
router.post("/", createPerson);

module.exports = router;
