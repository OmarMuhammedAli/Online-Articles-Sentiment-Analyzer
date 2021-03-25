// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import "babel-polyfill";

const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("responds with json", function (done) {
    request(app).get("/").set("Accept", "application/json").expect(200, done);
  });
});
