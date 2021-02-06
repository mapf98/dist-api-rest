const express = require("express");
const router = express.Router();
const { verifyStartup } = require("./utils.controller");
const swagger = require("../../swagger.json");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = swaggerJSDoc(swagger);

/**
 * @swagger
 *
 * /dist/api/v1/utils/verify:
 *   get:
 *     tags:
 *       - utils
 *     summary: Verifica la API
 *     description: Verifica que la API esté activa
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: La API está activa
 */
router.get("/verify", verifyStartup);
router.use("/docs", swaggerUI.serve);
/**
 * @swagger
 *
 * /dist/api/v1/utils/docs:
 *   get:
 *     tags:
 *       - utils
 *     summary: Documentación de la API
 *     description: Documentación de la API con Swagger
 *     produces:
 *       - text/html
 *     responses:
 *       200:
 *         description: HTML con la documentación de la API
 */
router.get("/docs", swaggerUI.setup(swaggerDocs));

module.exports = router;
