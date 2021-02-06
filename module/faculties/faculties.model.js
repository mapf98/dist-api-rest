const { PreparedStatement: PS } = require("pg-promise");
const {
  CREATE_FACULTY,
  READ_FACULTY,
  UPDATE_FACULTY,
  DELETE_FACULTY,
} = require("../../database/query.statements");

module.exports = {
  createFaculty: async (connection, faculty) => {
    const createFaculty = new PS({
      name: "create-faculty",
      text: CREATE_FACULTY,
      values: [faculty.name, faculty.description],
    });

    return await connection.none(createFaculty).catch((error) => {
      return new Error(error.message);
    });
  },
  getFaculties: async (connection) => {
    const getFaculties = new PS({
      name: "get-faculties",
      text: READ_FACULTY,
    });

    return await connection.manyOrNone(getFaculties).catch((error) => {
      return new Error(error.message);
    });
  },
  updateFaculty: async (connection, faculty_id, faculty) => {
    const updateFaculty = new PS({
      name: "update-faculty",
      text: UPDATE_FACULTY,
      values: [faculty.name, faculty.description, faculty_id],
    });

    return await connection.none(updateFaculty).catch((error) => {
      return new Error(error.message);
    });
  },
  deleteFaculty: async (connection, faculty_id) => {
    const deleteFaculty = new PS({
      name: "delete-faculty",
      text: DELETE_FACULTY,
      values: [faculty_id],
    });

    return await connection.none(deleteFaculty).catch((error) => {
      return new Error(error.message);
    });
  },
};
