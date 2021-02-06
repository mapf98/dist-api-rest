require("dotenv").config();
const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const router = require("./router");
const requestLogger = require("./middleware/requestLogger/requestLogger");
const filter = require("./middleware/filter/filter");
const dbConnection = require("./middleware/dbConnection/dbConnection");

const app = express();

app.use(express.static("public"));

app.use(
  compression(),
  helmet(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  requestLogger.logRequest,
  dbConnection.setDBConnection
);

//Router general de la API con prefijo global
app.use(`/${process.env.API_PREFIX}`, router);

app.use(filter.notFound);

module.exports = app;
