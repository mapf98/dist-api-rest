const logger = require("../../logger/logger");

// Middleware para registrar las peticiones recibidas en la API a través de la consola.
function logRequest(req, res, next) {
  logger.info(req.method + " -> " + req.originalUrl);
  next();
}

module.exports = { logRequest };
