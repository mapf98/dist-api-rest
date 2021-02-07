const express = require("express");
const router = express.Router();
const {
  getSections,
  createSection,
  updateSection,
  deleteSection,
  addPersonInSection,
  getPersonsInSection,
  deletePersonInSection,
} = require("./sections.controller");

/**
 * @swagger
 *
 * paths:
 *   /dist/api/v1/sections/:
 *     post:
 *       tags:
 *         - sections
 *       summary: Crea una nueva sección
 *       consumes:
 *         - application/json
 *       parameters:
 *        - in: body
 *          name: section
 *          description: La sección a crear
 *          schema:
 *            $ref: '#/definitions/Section'
 *       responses:
 *         201:
 *           description: Sección creada satisfactoriamente
 *         400:
 *           description: Ocurrió un error en la creación de la sección
 *     get:
 *       tags:
 *         - sections
 *       summary: Obtiene las secciones
 *       responses:
 *         200:
 *           description: Obtiene el listado de las secciones activas
 *         400:
 *           description: Ocurrió un error al obtener el listado de secciones
 *   /dist/api/v1/sections/{section_id}:
 *     put:
 *       tags:
 *         - sections
 *       summary: Modifica una sección existente
 *       consumes:
 *         - application/json
 *       parameters:
 *        - in: path
 *          name: section_id
 *          description: El ID de la sección a modificar
 *          schema:
 *            type: integer
 *            minimum: 1
 *        - in: body
 *          name: section
 *          description: Los datos modificados de la sección
 *          schema:
 *            $ref: '#/definitions/Section'
 *       responses:
 *         200:
 *           description: Sección modificada satisfactoriamente
 *         400:
 *           description: Ocurrió un error al modificar la sección
 *     delete:
 *       tags:
 *         - sections
 *       summary: Elimina una sección existente
 *       parameters:
 *        - in: path
 *          name: section_id
 *          description: El ID de la sección a eliminar
 *          schema:
 *            type: integer
 *            minimum: 1
 *       responses:
 *         200:
 *           description: Sección eliminada satisfactoriamente
 *         400:
 *           description: Ocurrió un error al eliminar la sección
 *   /dist/api/v1/sections/{section_id}/persons:
 *     post:
 *       tags:
 *         - sections
 *       summary: Añade una persona a una sección
 *       consumes:
 *         - application/json
 *       parameters:
 *        - in: path
 *          name: section_id
 *          description: El ID de la sección
 *          schema:
 *            type: integer
 *            minimum: 1
 *        - in: body
 *          name: Enrollment
 *          description: Datos de la persona a añadir en la sección
 *          schema:
 *            $ref: '#/definitions/Enrollment'
 *       responses:
 *         201:
 *           description: Persona añadida a la sección satisfactoriamente
 *         400:
 *           description: Ocurrió un error al añadir la persona en la sección
 *     get:
 *       tags:
 *         - sections
 *       summary: Obtiene los estudiantes o profesores en una sección
 *       parameters:
 *        - in: path
 *          name: section_id
 *          description: El ID de la sección
 *          schema:
 *            type: integer
 *            minimum: 1
 *        - in: query
 *          name: person_type
 *          description: Tipo de persona en la sección
 *          schema:
 *            $ref: '#/definitions/PersonType'
 *          required: true    
 *       responses:
 *         200:
 *           description: Obtiene los estudiantes o profesores en una sección
 *         400:
 *           description: Ocurrió un error los estudiantes o profesores en una sección
 *   /dist/api/v1/sections/{section_id}/persons/{person_id}:
 *     delete:
 *       tags:
 *         - sections
 *       summary: Eliminar a una persona de una sección
 *       parameters:
 *        - in: path
 *          name: section_id
 *          description: El ID de la sección
 *          schema:
 *            type: integer
 *            minimum: 1
 *        - in: path
 *          name: person_id
 *          description: El ID de la persona a eliminar en la sección
 *          schema:
 *            type: integer
 *            minimum: 1
 *       responses:
 *         200:
 *           description: Persona eliminada de la sección satisfactoriamente
 *         400:
 *           description: Ocurrió un error al eliminar a la persona de la sección   
 *
 * definitions:
 *  Section:
 *    type: object
 *    required:
 *      - name
 *      - description
 *      - uc
 *      - semester
 *      - type      
 *      - fk_school
 *    properties:
 *      name:
 *        type: string
 *      description:
 *        type: string
 *      uc:
 *        type: integer
 *      semester:
 *        type: integer
 *      type:
 *        type: string
 *        enum: [MANDATORY, ELECTIVE]
 *      ht:
 *        type: number
 *      hp:
 *        type: number
 *      hl:
 *        type: number    
 *      fk_school:
 *        type: integer
 *  Enrollment:
 *    type: object
 *    required:
 *      - type      
 *      - fk_person
 *    properties:
 *      type:
 *        type: string
 *        enum: [STUDENT, TEACHER]  
 *      fk_person:
 *        type: integer
 *  PersonType:
 *    type: string
 *    enum: [student, teacher]
 * 
 */
router.post("/", createSection);
router.get("/", getSections);
router.put("/:section_id", updateSection);
router.delete("/:section_id", deleteSection);
router.post("/:section_id/persons", addPersonInSection);
router.get("/:section_id/persons", getPersonsInSection);
router.delete("/:section_id/persons/:person_id", deletePersonInSection);

module.exports = router;