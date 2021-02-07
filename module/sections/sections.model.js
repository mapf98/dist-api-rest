const { PreparedStatement: PS } = require("pg-promise");
const {
  READ_SECTION,
  CREATE_SECTION,
  UPDATE_SECTION,
  DELETE_SECTION,
  CREATE_ENROLL,
  DELETE_ENROLL,
  READ_SECTION_ENROLLED
} = require("../../database/query.statements");

module.exports = {
  getSections: async (connection) => {
    const getSections = new PS({
      name: "get-sections",
      text: READ_SECTION,
    });

    return await connection.manyOrNone(getSections).catch((error) => {
      return new Error(error.message);
    });
  },
  createSection: async (connection, section) => {
    const createSection = new PS({
      name: "create-section",
      text: CREATE_SECTION,
      values:   [section.name, 
                section.description, 
                section.uc,
                section.semester,
                section.type,
                section.ht,
                section.hp,
                section.hl,
                section.fk_school],
    });

    return await connection.none(createSection).catch((error) => {
      return new Error(error.message);
    });
  },
  updateSection: async (connection, section) => {
    const updateSection = new PS({
      name: "update-section",
      text: UPDATE_SECTION,
      values:   [section.name, 
                section.description, 
                section.uc,
                section.semester,
                section.type,
                section.ht,
                section.hp,
                section.hl,
                section.fk_school,
                section.id],
    });

    return await connection.none(updateSection).catch((error) => {
      return new Error(error.message);
    });
  },
  deleteSection: async (connection, section_id) => {
    const deleteSection = new PS({
      name: "delete-section",
      text: DELETE_SECTION,
      values: [section_id],
    });

    return await connection.none(deleteSection).catch((error) => {
      return new Error(error.message);
    });
  },
  addPersonInSection: async (connection, enrollment) => {
    const addPersonInSection = new PS({
      name: "add-person-in-section",
      text: CREATE_ENROLL,
      values:   [enrollment.type, 
                enrollment.fk_person, 
                enrollment.fk_section],
    });

    return await connection.none(addPersonInSection).catch((error) => {
      return new Error(error.message);
    });
  },
  getPersonsInSection: async (connection, section_id, person_type) => {
    const getPersonsInSections = new PS({
      name: "get-persons-in-sections",
      text: READ_SECTION_ENROLLED,
      values:   [section_id, person_type],
    });

    return await connection.manyOrNone(getPersonsInSections).catch((error) => {
      return new Error(error.message);
    });
  },
  deletePersonInSection: async (connection, section_id, person_id) => {
    const deletePersonInSection = new PS({
      name: "delete-person-in-section",
      text: DELETE_ENROLL,
      values: [person_id, section_id],
    });

    return await connection.none(deletePersonInSection).catch((error) => {
      return new Error(error.message);
    });
  },
};
