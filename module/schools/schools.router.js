const express = require("express");
const router = express.Router();
const {
  getSchools,
  createSchool,
  updateSchool,
  deleteSchool,
} = require("./schools.controller");

/**
 * @swagger
 *
 * paths:
 *   /dist/api/v1/schools/:
 *     post:
 *       summary: Crea una nueva escuela
 *       consumes:
 *         - application/json
 *       parameters:
 *        - in: body
 *          name: school
 *          description: La escuela a crear
 *          fk_faculty: El ID de la facultad a la que pertenece la nueva escuela
 *          schema:
 *            $ref: '#/definitions/School'
 *       responses:
 *         201:
 *           description: Escuela creada satisfactoriamente
 *         400:
 *           description: Ocurrió un error en la creación de la escuela
 *     get:
 *       summary: Obtiene las escuelas
 *       responses:
 *         200:
 *           description: Obtiene el listado de las escuelas activas
 *         400:
 *           description: Ocurrió un error al obtener el listado de escuelas
 *   /dist/api/v1/schools/{school_id}:
 *     put:
 *       summary: Modifica una escuela existente
 *       consumes:
 *         - application/json
 *       parameters:
 *        - in: path
 *          name: school_id
 *          description: El ID de la escuela a modificar
 *          schema:
 *            type: integer
 *            minimum: 1
 *        - in: body
 *          name: faculty
 *          description: Los datos modificados de la escuela
 *          fk_faculty: El ID de la facultad a la que pertenece la escuela
 *          schema:
 *            $ref: '#/definitions/School'
 *       responses:
 *         200:
 *           description: Escuela modificada satisfactoriamente
 *         400:
 *           description: Ocurrió un error al modificar la escuela
 *     delete:
 *       summary: Elimina una escuela existente
 *       parameters:
 *        - in: path
 *          name: school_id
 *          description: El ID de la escuela a eliminar
 *          schema:
 *            type: integer
 *            minimum: 1
 *       responses:
 *         200:
 *           description: Escuela eliminada satisfactoriamente
 *         400:
 *           description: Ocurrió un error al eliminar la escuela
 *
 * definitions:
 *  School:
 *    type: object
 *    required:
 *      - name
 *      - description
 *      - fk_faculty
 *    properties:
 *      name:
 *        type: string
 *      description:
 *        type: string
 *      fk_faculty:
 *        type: integer
 */
router.post("/", createSchool);
router.get("/", getSchools);
router.put("/:school_id", updateSchool);
router.delete("/:school_id", deleteSchool);

module.exports = router;
