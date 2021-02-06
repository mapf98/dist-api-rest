require("dotenv").config();
const pgp = require("pg-promise")();

module.exports = pgp({
  connectionString: `postgres://${process.env.DB_USER_PG}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
});
