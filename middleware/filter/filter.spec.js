const filter = require("./filter");

describe("Filter Middleware Test Suite", () => {
  it("Success Filter 404", () => {
    const req = {
        method: "GET",
        path: "/local/no-found",
      },
      res = jest.fn(),
      next = jest.fn();

    filter.notFound(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
