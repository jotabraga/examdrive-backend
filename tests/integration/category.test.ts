import supertest from "supertest";
import app from "../../src/app";
import {
  startConnection,
  clearDatabase,
  endConnection,
} from "../utils/database";
import * as categoryFactory from "../factories/categoryFactory";

beforeAll(startConnection);
afterAll(endConnection);
beforeEach(clearDatabase);

describe("GET /categories", () => {
  it("should answer with status 200 for a valid request", async () => {
    await categoryFactory.insertCategories();
    const response = await supertest(app).get("/categories");
    expect(response.status).toBe(200);
  });
});
