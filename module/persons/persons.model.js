const { PreparedStatement: PS } = require("pg-promise");
const {
  READ_PERSON,
  CREATE_PERSON,
  UPDATE_PERSON,
  DELETE_PERSON,
} = require("../../database/query.statements");

module.exports = {
  getPersons: async (connection) => {
    const getPersons = new PS({
      name: "get-persons",
      text: READ_PERSON,
    });

    return await connection.manyOrNone(getPersons).catch((error) => {
      return new Error(error.message);
    });
  },
  createPerson: async (connection, person) => {
    const createPerson = new PS({
      name: "create-person",
      text: CREATE_PERSON,
      values: [person.dni, person.first_name, person.last_name],
    });

    return await connection.none(createPerson).catch((error) => {
      return new Error(error.message);
    });
  },
  updatePerson: async (connection, person_id, person) => {
    const updatePerson = new PS({
      name: "update-person",
      text: UPDATE_PERSON,
      values: [person.dni, person.first_name, person.last_name, person_id],
    });

    return await connection.none(updatePerson).catch((error) => {
      return new Error(error.message);
    });
  },
  deletePerson: async (connection, person_id) => {
    const deletePerson = new PS({
      name: "delete-person",
      text: DELETE_PERSON,
      values: [person_id],
    });

    return await connection.none(deletePerson).catch((error) => {
      return new Error(error.message);
    });
  },
};
