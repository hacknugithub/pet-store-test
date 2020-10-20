const request = require("request");

const endpoint = "http://localhost:5000/api/v1/pets";

describe("Server", () => {
  var server;
  beforeAll(() => {
    server = require("../server");
  });
  afterAll(() => {
    server.close();
  });

  describe("pet", function () {
    it("should return 200 response code", function (done) {
      request.get(endpoint, function (error, res) {
        expect(res.statusCode).toEqual(200);
        done();
      });
    });

    it("should return 201 response code", function (done) {
      request.post(
        endpoint,
        { json: true, body: { name: "Garfield", tag: "dogs" } },
        function (error, res) {
          expect(res.statusCode).toEqual(201);
          done();
        }
      );
    });

    it("should return 200 response code", function (done) {
      request.get(endpoint + "/1", function (error, res) {
        expect(res.statusCode).toEqual(200);
        done();
      });
    });
  });
});
