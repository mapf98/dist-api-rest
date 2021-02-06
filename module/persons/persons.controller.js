const personsModel = require("./persons.model");
const logger = require("../../logger/logger");

module.exports = {
  getPersons: async (req, res) => {
    const response = await personsModel.getPersons(req.connection);

    if (response instanceof Error) {
      logger.error(`Error al obtener las personas [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(`Personas obtenidas satisfactoriamente`);
      res.status(200).json(response);
    }
  },
  createPerson: async (req, res) => {
    const person = {
      dni: req.body.dni,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    };

    const response = await personsModel.createPerson(req.connection, person);

    if (response instanceof Error) {
      logger.error(`Error al crear una nueva persona [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(
        `Persona creada satisfactoriamente [DNI: ${person.dni}, Nombre: ${person.first_name} ${person.last_name}]`
      );
      res.sendStatus(201);
    }
  },
  updatePerson: async (req, res) => {
    const person = {
      dni: req.body.dni,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    };
    const response = await personsModel.updatePerson(
      req.connection,
      req.params.person_id,
      person
    );

    if (response instanceof Error) {
      logger.error(`Error al modificar la persona [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(`Persona modificada satisfactoriamente [${person.name}]`);
      res.sendStatus(200);
    }
  },
  deletePerson: async (req, res) => {
    const response = await personsModel.deletePerson(
      req.connection,
      req.params.person_id
    );

    if (response instanceof Error) {
      logger.error(`Error al eliminar la persona [${response}]`);
      res.sendStatus(400);
    } else {
      logger.info(
        `Persona eliminada satisfactoriamente [${req.params.person_id}]`
      );
      res.sendStatus(200);
    }
  },
};
