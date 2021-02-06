const requestLogger = require("./requestLogger");

describe("RequestLogger Middleware Test Suite", () => {
  it("Success RequestLogger", () => {
    const req = {
        method: "GET",
        originalUrl: "/local/test",
      },
      res = jest.fn(),
      next = jest.fn();

    requestLogger.logRequest(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
