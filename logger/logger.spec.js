require("dotenv").config();
const logger = require("./logger");

describe("Logger Util Test Suite", () => {
  it("Logger INFO", () => {
    let test = true;

    try {
      logger.info("Test");
    } catch (error) {
      test = false;
    }

    expect(test).toBe(true);
  });

  it("Logger WARN", () => {
    let test = true;

    try {
      logger.warn("Test");
    } catch (error) {
      test = false;
    }

    expect(test).toBe(true);
  });

  it("Logger ERROR", () => {
    let test = true;

    try {
      logger.error("Test");
    } catch (error) {
      test = false;
    }

    expect(test).toBe(true);
  });
});
