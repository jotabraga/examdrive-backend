import supertest from "supertest";
import app from "../../src/app";
import {
  startConnection,
  clearDatabase,
  endConnection,
} from "../utils/database";
import * as classFactory from "../factories/classFactory";
import * as professorFactory from "../factories/professorFactory";
import * as subjectFactory from "../factories/subjectFactory";

beforeAll(startConnection);
afterAll(endConnection);
beforeEach(clearDatabase);

describe("GET /classes/:subjectId", () => {
  it("should answer with status 200 for a valid request", async () => {
    await professorFactory.insertProfessors();
    await subjectFactory.insertSubjects();
    await classFactory.createClasses();
    const response = await supertest(app).get("/classes/1");
    expect(response.status).toBe(200);
  });

  it("should answer with the subject classes array for a valid request", async () => {
    await professorFactory.insertProfessors();
    await subjectFactory.insertSubjects();
    await classFactory.createClasses();
    const response = await supertest(app).get("/classes/1");
    expect(response.body.length).toBe(1);
  });

  it("should answer with status 404 for no classes of subject", async () => {
    await professorFactory.insertProfessors();
    await subjectFactory.insertSubjects();
    await classFactory.createClasses();
    const response = await supertest(app).get("/classes/8");
    expect(response.status).toBe(404);
  });
});
