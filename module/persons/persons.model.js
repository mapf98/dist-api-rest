const { PreparedStatement: PS } = require("pg-promise");
const {
  READ_PERSON,
  CREATE_PERSON,
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
};
