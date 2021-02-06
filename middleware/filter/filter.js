const createError = require("http-errors");
const logger = require("../../logger/logger");

// Middleware para uso general en caso de peticiones hacia rutas no existentes.
module.exports = {
  notFound: (req, res, next) => {
    logger.warn(
      `Intento de acceso a recurso desconocido [${req.method} -> ${req.path}]`
    );
    next(createError(404, "Recurso no encontrado."));
  },
};
