const { createLogger, format, transports } = require("winston");
const chalk = require("chalk");

//Logger personalizado con niveles
module.exports = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(
        format.timestamp({
          format: "DD-MM-YYYY hh:mm:ss",
        }),
        format.ms(),
        format.printf((level) => {
          let message;
          if (level.level.toUpperCase() == "INFO") {
            message = `[${level.timestamp}] | ${chalk.blue(
              level.level.toUpperCase()
            )} | ${chalk.magenta(level.ms)} | ${level.message}`;
          }

          if (level.level.toUpperCase() == "ERROR") {
            message = `[${level.timestamp}] | ${chalk.red(
              level.level.toUpperCase()
            )} | ${level.message}`;
          }

          if (level.level.toUpperCase() == "WARN") {
            message = `[${level.timestamp}] | ${chalk.yellow(
              level.level.toUpperCase()
            )} | ${level.message}`;
          }
          return message;
        })
      ),
    }),
  ],
});
