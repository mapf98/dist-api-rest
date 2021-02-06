const connectionBD = require("../../database/connections/postgresConnection");
const createError = require("http-errors");
const logger = require("../../logger/logger");

// Middleware para agregar la conección al objeto request para que pueda ser utilizado por controladores y modelos.
async function setDBConnection(req, res, next) {
  try {
    req.connection = connectionBD;
  } catch (error) {
    logger.error(`Problema de conexión con la base de datos: ${error.message}`);
    next(
      createError(500, "No se pudo establecer la conexión con base de datos")
    );
  }
  next();
}

module.exports = { setDBConnection };
