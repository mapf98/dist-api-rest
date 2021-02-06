const express = require("express");
const router = express.Router();
const {
  getPersons,
  createPerson,
  updatePerson,
  deletePerson,
} = require("./persons.controller");

/**
 * @swagger
 *
 * paths:
 *   /dist/api/v1/persons/:
 *     post:
 *       tags:
 *         - persons
 *       summary: Crea una nueva persona
 *       consumes:
 *         - application/json
 *       parameters:
 *        - in: body
 *          name: person
 *          description: La persona a crear
 *          schema:
 *            $ref: '#/definitions/Person'
 *       responses:
 *         201:
 *           description: Persona creada satisfactoriamente
 *         400:
 *           description: Ocurrió un error en la creación de la persona
 *     get:
 *       tags:
 *         - persons
 *       summary: Obtiene las personas
 *       responses:
 *         200:
 *           description: Obtiene el listado de personas activas
 *         400:
 *           description: Ocurrió un error al obtener el listado de personas
 *   /dist/api/v1/persons/{person_id}:
 *     put:
 *       tags:
 *         - persons
 *       summary: Modifica una persona existente
 *       consumes:
 *         - application/json
 *       parameters:
 *        - in: path
 *          name: person_id
 *          description: El ID de la persona a modificar
 *          schema:
 *            type: integer
 *            minimum: 1
 *        - in: body
 *          name: person
 *          description: Los datos modificados de la persona
 *          schema:
 *            $ref: '#/definitions/Person'
 *       responses:
 *         200:
 *           description: Persona modificada satisfactoriamente
 *         400:
 *           description: Ocurrió un error al modificar la persona
 *     delete:
 *       tags:
 *         - persons
 *       summary: Elimina una persona existente
 *       parameters:
 *        - in: path
 *          name: person_id
 *          description: El ID de la persona a eliminar
 *          schema:
 *            type: integer
 *            minimum: 1
 *       responses:
 *         200:
 *           description: Persona eliminada satisfactoriamente
 *         400:
 *           description: Ocurrió un error al eliminar la persona
 *
 * definitions:
 *  Person:
 *    type: object
 *    required:
 *      - dni
 *      - first_name
 *      - last_name
 *    properties:
 *      dni:
 *        type: string
 *      first_name:
 *        type: string
 *      last_name:
 *        type: string
 */
router.post("/", createPerson);
router.get("/", getPersons);
router.put("/:person_id", updatePerson);
router.delete("/:person_id", deletePerson);

module.exports = router;
