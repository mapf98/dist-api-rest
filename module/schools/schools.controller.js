const schoolsModel = require("./schools.model");
const logger = require("../../logger/logger");

module.exports = {
  getSchools: async (req, res) => {
    const response = await schoolsModel.getSchools(req.connection);

    if (response instanceof Error) {
      logger.error(`Error al obtener las escuelas [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(`Escuelas obtenidas satisfactoriamente`);
      res.status(200).json(response);
    }
  },
  createSchool: async (req, res) => {
    const school = {
      name: req.body.name,
      description: req.body.description,
      fk_faculty: req.body.fk_faculty,
    };

    const response = await schoolsModel.createSchool(req.connection, school);

    if (response instanceof Error) {
      logger.error(`Error al crear una nueva escuela [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(`Escuela creada satisfactoriamente [${school.name}]`);
      res.sendStatus(201);
    }
  },
  updateSchool: async (req, res) => {
    const school = {
      id: req.params.school_id,
      name: req.body.name,
      description: req.body.description,
      fk_faculty: req.body.fk_faculty,
    };

    const response = await schoolsModel.updateSchool(req.connection, school);

    if (response instanceof Error) {
      logger.error(`Error al actualizar una escuela [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(`Escuela actualizada satisfactoriamente [${school.name}]`);
      res.sendStatus(200);
    }
  },
  deleteSchool: async (req, res) => {
    const response = await schoolsModel.deleteSchool(
      req.connection,
      req.params.school_id
    );

    if (response instanceof Error) {
      logger.error(`Error al eliminar una escuela [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(
        `Escuela eliminada satisfactoriamente [School ID: ${req.params.school_id}]`
      );
      res.sendStatus(200);
    }
  },
};
