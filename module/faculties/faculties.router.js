const express = require("express");
const router = express.Router();
const {
  createFaculty,
  getFaculties,
  updateFaculty,
  deleteFaculty,
} = require("./faculties.controller");

/**
 * @swagger
 *
 * paths:
 *   /dist/api/v1/faculties/:
 *     post:
 *       summary: Crea una nueva facultad
 *       consumes:
 *         - application/json
 *       parameters:
 *        - in: body
 *          name: faculty
 *          description: La facultad a crear
 *          schema:
 *            $ref: '#/definitions/Faculty'
 *       responses:
 *         201:
 *           description: Facultad creada satisfactoriamente
 *         400:
 *           description: Ocurrió un error en la creación de la facultad
 *     get:
 *       summary: Obtiene las facultades
 *       responses:
 *         200:
 *           description: Obtiene el listado de facultades activas
 *         400:
 *           description: Ocurrió un error al obtener el listado de facultades
 *   /dist/api/v1/faculties/{faculty_id}:
 *     put:
 *       summary: Modifica una facultad existente
 *       consumes:
 *         - application/json
 *       parameters:
 *        - in: path
 *          name: faculty_id
 *          description: El ID de la facultad a modificar
 *          schema:
 *            type: integer
 *            minimum: 1
 *        - in: body
 *          name: faculty
 *          description: Los datos modificados de la facultad
 *          schema:
 *            $ref: '#/definitions/Faculty'
 *       responses:
 *         200:
 *           description: Facultad modificada satisfactoriamente
 *         400:
 *           description: Ocurrió un error al modificar la facultad
 *     delete:
 *       summary: Elimina una facultad existente
 *       parameters:
 *        - in: path
 *          name: faculty_id
 *          description: El ID de la facultad a eliminar
 *          schema:
 *            type: integer
 *            minimum: 1
 *       responses:
 *         200:
 *           description: Facultad eliminada satisfactoriamente
 *         400:
 *           description: Ocurrió un error al eliminar la facultad
 *
 * definitions:
 *  Faculty:
 *    type: object
 *    required:
 *      - name
 *      - description
 *    properties:
 *      name:
 *        type: string
 *      description:
 *        type: string
 */
router.post("/", createFaculty);
router.get("/", getFaculties);
router.put("/:faculty_id", updateFaculty);
router.delete("/:faculty_id", deleteFaculty);

module.exports = router;
