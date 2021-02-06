const logger = require("../../logger/logger");

module.exports = {
  verifyStartup: async (req, res) => {
    res.status(200).send("API REST Sistemas Distribuidos ACTIVA");
  },
};
