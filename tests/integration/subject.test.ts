import "../../src/setup";
import supertest from "supertest";
import app from "../../src/app";
import {
  clearDatabase,
  endConnection,
  startConnection,
} from "../utils/database";
import { insertSubjects } from "../factories/subjectFactory";

beforeAll(startConnection);
afterAll(endConnection);
beforeEach(clearDatabase);

describe("GET /subjects", () => {
  it("should answer status 200 for a valid requisition", async () => {
    await insertSubjects();
    const request = await supertest(app).get("/subjects");
    expect(request.status).toEqual(200);
  });

  it("should send a subject array for a valid requisition", async () => {
    await insertSubjects();
    const request = await supertest(app).get("/subjects");
    expect(request.body.length).toEqual(5);
  });

  it("should answer status 404 from empty subjects table", async () => {
    const request = await supertest(app).get("/subjects");
    expect(request.status).toEqual(404);
  });
});
