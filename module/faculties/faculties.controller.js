const logger = require("../../logger/logger");
const facultiesModel = require("./faculties.model");

module.exports = {
  createFaculty: async (req, res) => {
    const faculty = {
      name: req.body.name,
      description: req.body.description,
    };
    const response = await facultiesModel.createFaculty(
      req.connection,
      faculty
    );

    if (response instanceof Error) {
      logger.error(`Error al crear la facultad [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(`Facultad creada satisfactoriamente [${faculty.name}]`);
      res.sendStatus(201);
    }
  },
  getFaculties: async (req, res) => {
    const response = await facultiesModel.getFaculties(req.connection);

    if (response instanceof Error) {
      logger.error(`Error al obtener las facultades [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(`Facultades obtenidas satisfactoriamente`);
      res.status(200).json(response);
    }
  },
  updateFaculty: async (req, res) => {
    const faculty = {
      name: req.body.name,
      description: req.body.description,
    };
    const response = await facultiesModel.updateFaculty(
      req.connection,
      req.params.faculty_id,
      faculty
    );

    if (response instanceof Error) {
      logger.error(`Error al modificar la facultad [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(`Facultad modificada satisfactoriamente [${faculty.name}]`);
      res.sendStatus(200);
    }
  },
  deleteFaculty: async (req, res) => {
    const response = await facultiesModel.deleteFaculty(
      req.connection,
      req.params.faculty_id
    );

    if (response instanceof Error) {
      logger.error(`Error al eliminar la facultad [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(
        `Facultad eliminada satisfactoriamente [${req.params.faculty_id}]`
      );
      res.sendStatus(200);
    }
  },
};
