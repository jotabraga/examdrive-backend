import "../../src/setup";
import supertest from "supertest";
import app from "../../src/app";
import {
  clearDatabase,
  endConnection,
  startConnection,
} from "../utils/database";
import * as testFactory from "../factories/testFactory";

beforeAll(startConnection);
afterAll(endConnection);
beforeEach(clearDatabase);

describe("POST /register-test", () => {
  it("returns status 400 for empty params", async () => {
    const body = {};
    const request = await supertest(app).post("/register-test").send(body);
    expect(request.status).toEqual(400);
  });

  it("returns status 201 for valid params", async () => {
    const body = await testFactory.getValidParams();
    const request = await supertest(app).post("/register-test").send(body);
    expect(request.status).toEqual(201);
  });
});
