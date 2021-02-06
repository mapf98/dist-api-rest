const logger = require("./logger/logger");
const app = require("./app");
const port = process.env.API_PORT;

//Se levanta el servidor http
app.listen(port, () => logger.info(`Servidor activo [Puerto: ${port}]`));
