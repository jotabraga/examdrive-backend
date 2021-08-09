import "../../src/setup";
import supertest from "supertest";
import app from "../../src/app";
import { clearDatabase, endConnection, startConnection } from "../utils/database";
import { insertProfessors } from "../factories/professorFactory";

beforeAll(startConnection);
afterAll(endConnection);
beforeEach(clearDatabase)

describe('GET /professors',()=>{
    it('should answer with status 200 for a valid request', async ()=>{
        await insertProfessors();
        const response = await supertest(app).get("/professors");
        expect(response.status).toEqual(200);
    })
    it('should answer with a professors array for a valid request', async ()=>{
        await insertProfessors();
        const response = await supertest(app).get("/professors");
        expect(response.body.lenght).toEqual(4);
    }) 
    it('should answer with status 404 for no professors in database', async ()=>{
        const response = await supertest(app).get("/professors");
        expect(response.status).toEqual(404);
    })  
})