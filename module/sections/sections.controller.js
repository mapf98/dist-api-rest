const sectionsModel = require("./sections.model");
const logger = require("../../logger/logger");

module.exports = {
  getSections: async (req, res) => {
    const response = await sectionsModel.getSections(req.connection);

    if (response instanceof Error) {
      logger.error(`Error al obtener las sección [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(`Sección obtenidas satisfactoriamente`);
      res.status(200).json(response);
    }
  },
  createSection: async (req, res) => {
    const section = {
      name: req.body.name,
      description: req.body.description,
      uc: req.body.uc,
      semester: req.body.semester,
      type: req.body.type,
      ht: (req.body.ht) ? req.body.ht : null,
      hp: (req.body.hp) ? req.body.hp : null,
      hl: (req.body.hl) ? req.body.hl : null,
      fk_school: req.body.fk_school
    };

    const response = await sectionsModel.createSection(req.connection, section);

    if (response instanceof Error) {
      logger.error(`Error al crear una nueva sección [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(`Sección creada satisfactoriamente [${section.name}]`);
      res.sendStatus(201);
    }
  },
  updateSection: async (req, res) => {
    const section = {
        id: req.params.section_id,
        name: req.body.name,
        description: req.body.description,
        uc: req.body.uc,
        semester: req.body.semester,
        type: req.body.type,
        ht: (req.body.ht) ? req.body.ht : null,
        hp: (req.body.hp) ? req.body.hp : null,
        hl: (req.body.hl) ? req.body.hl : null,
        fk_school: req.body.fk_school
      };

    const response = await sectionsModel.updateSection(req.connection, section);

    if (response instanceof Error) {
      logger.error(`Error al actualizar una sección [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(`Sección actualizada satisfactoriamente [${section.name}]`);
      res.sendStatus(200);
    }
  },
  deleteSection: async (req, res) => {
    const response = await sectionsModel.deleteSection(
      req.connection,
      req.params.section_id
    );

    if (response instanceof Error) {
      logger.error(`Error al eliminar una sección [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(
        `Sección eliminada satisfactoriamente [Section ID: ${req.params.section_id}]`
      );
      res.sendStatus(200);
    }
  },
  addPersonInSection: async (req, res) => {
    const enrollment = {
        type: req.body.type,
        fk_person: req.body.fk_person,
        fk_section: req.params.section_id
    };

    const response = await sectionsModel.addPersonInSection(req.connection, enrollment);

    if (response instanceof Error) {
      logger.error(`Error al añadir a la persona en la sección [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(`Persona añadida a la sección satisfactoriamente satisfactoriamente [Person ID: ${req.body.fk_person}|Section ID: ${req.params.section_id}]`);
      res.sendStatus(201);
    }
  },
  getPersonsInSection: async (req, res) => {
    const response = await sectionsModel.getPersonsInSection(
        req.connection,
        req.params.section_id,
        req.query.person_type.toUpperCase()
    );

    if (response instanceof Error) {
      logger.error(`Error al obtener las personas en la sección [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(`Personas de la sección obtenidas satisfactoriamente`);
      res.status(200).json(response);
    }
  },
  deletePersonInSection: async (req, res) => {
    const response = await sectionsModel.deletePersonInSection(
      req.connection,
      req.params.section_id,
      req.params.person_id
    );

    if (response instanceof Error) {
      logger.error(`Error al eliminar la persona de la sección [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(
        `Persona eliminada satisfactoriamente de la sección [Person ID: ${req.params.person_id}|Section ID: ${req.params.section_id}]`
      );
      res.sendStatus(200);
    }
  },
};
