import "../../src/setup";
import supertest from "supertest";
import app from "../../src/app";
import { clearDatabase, endConnection, startConnection } from "../utils/database";
import { insertSubjects } from "../factories/subjectFactory";
import { insertProfessors } from "../factories/professorFactory";

beforeAll(startConnection);
afterAll(endConnection);
beforeEach(clearDatabase)

describe("GET /subjects", () => {
  it("should answer status 200 from valid url", async () => {
    await insertSubjects();
    const result = await supertest(app).get("/subjects");
    expect(result.status).toEqual(200);
  });
  it("should answer an array from valid url", async () => {
    const length = await insertSubjects();
    const result = await supertest(app).get("/subjects");
    expect(result.body.length).toEqual(length);
  });
  it("should answer status 404 from empty subjects table", async () => {
    const result = await supertest(app).get("/subjects");
    expect(result.status).toEqual(404);
  });
});

// describe("GET /subjects/:id/professors", () => {
//     it("should answer status 404 from inexistent id", async () => {
//         const subjectLength = await populateSubjects();
//         const result = await supertest(app).get(`/subjects/${subjectLength+1}/professors`);
//         expect(result.status).toEqual(404);
//     });
//     it("should answer status 400 from invalid id", async () => {
//         const result = await supertest(app).get(`/subjects/-1/professors`);
//         expect(result.status).toEqual(400);
//     });
//     it("should answer a object with professor array from valid id", async () => {
//         await populateSubjects();
//         await populateProfessors();
//         await createSubjectProfessorRelation(1,1)
//         const result = await supertest(app).get(`/subjects/1/professors`);
//         expect(result.body.professors.length).toEqual(1);
//       });
//       it("should answer an object from valid id", async () => {
//         await populateSubjects();
//         await populateProfessors();
//         const subject= await createSubjectProfessorRelation(1,1)
//         const result = await supertest(app).get("/subjects/1/professors");

//         expect(result.body).toMatchObject(subject)
//       });
//   });