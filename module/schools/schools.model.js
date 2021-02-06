const { PreparedStatement: PS } = require("pg-promise");
const {
  READ_SCHOOL,
  CREATE_SCHOOL,
  UPDATE_SCHOOL,
  DELETE_SCHOOL,
} = require("../../database/query.statements");

module.exports = {
  getSchools: async (connection) => {
    const getSchools = new PS({
      name: "get-schools",
      text: READ_SCHOOL,
    });

    return await connection.manyOrNone(getSchools).catch((error) => {
      return new Error(error.message);
    });
  },
  createSchool: async (connection, school) => {
    const createSchool = new PS({
      name: "create-school",
      text: CREATE_SCHOOL,
      values: [school.name, school.description, school.fk_faculty],
    });

    return await connection.none(createSchool).catch((error) => {
      return new Error(error.message);
    });
  },
  updateSchool: async (connection, school) => {
    const updateSchool = new PS({
      name: "update-school",
      text: UPDATE_SCHOOL,
      values: [school.name, school.description, school.fk_faculty, school.id],
    });

    return await connection.none(updateSchool).catch((error) => {
      return new Error(error.message);
    });
  },
  deleteSchool: async (connection, school_id) => {
    const deleteSchool = new PS({
      name: "delete-school",
      text: DELETE_SCHOOL,
      values: [school_id],
    });

    return await connection.none(deleteSchool).catch((error) => {
      return new Error(error.message);
    });
  },
};
