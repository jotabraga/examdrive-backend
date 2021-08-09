import "../../src/setup";
import supertest from "supertest";
import app from "../../src/app";
import { clearDatabase, endConnection, startConnection } from "../utils/database";
import { insertCategories } from "../factories/categoryFactory";
import { insertSubjects } from "../factories/subjectFactory";
import { insertProfessors } from "../factories/professorFactory";
import {   prepareDatabaseTests } from "../factories/testFactory";

beforeAll(startConnection);
afterAll(endConnection);
beforeEach(clearDatabase);

describe('POST /tests',()=>{
    it('returns status 400 for empty params', async ()=>{
        const body = {};
        const result = await supertest(app).post('/tests').send(body)
        expect(result.status).toEqual(400)
    })
    it('returns status 400 for invalid params', async ()=>{
        const body = await prepareDatabaseTests(1,true);
        body[0].link= 'abc'
        const result = await supertest(app).post('/tests').send(body[0])
        expect(result.status).toEqual(400)
    })
    it('returns status 404 for invalid relation between subjects and professors', async ()=>{
        const body = await prepareDatabaseTests(1,false);
        const result = await supertest(app).post('/tests').send(body[0])
        expect(result.status).toEqual(404)
    })
    it('returns status 404 for invalid relations id', async ()=>{
        const body = await prepareDatabaseTests(1,true);
        body[0].category.id = 100;
        const result = await supertest(app).post('/tests').send(body[0])
        expect(result.status).toEqual(404)
    })
    it('returns status 201 for valid params', async ()=>{
        const body = await prepareDatabaseTests(1,true);
        const result = await supertest(app).post('/tests').send(body[0])
        expect(result.status).toEqual(201)
    })
})

describe('GET /categories/tests/:type/:subjectId',()=>{
    it('returns status 400 for invalid id', async ()=>{
        const result = await supertest(app).get('/categories/tests/subject/-1')
        expect(result.status).toEqual(400);
    })
    it('returns status 400 for invalid type', async ()=>{
        const result = await supertest(app).get('/categories/tests/subjects/1')
        expect(result.status).toEqual(400);
    })
    it('returns status 404 for id inexistent', async ()=>{
        const body = await prepareDatabaseTests(1,true);
        await populateTests(body);
        const result = await supertest(app).get('/categories/tests/subject/100')
        expect(result.status).toEqual(404);
    })
    it('returns status 200 for valid url', async ()=>{
        const body = await prepareDatabaseTests(1,true);

        await populateTests(body);
        const result = await supertest(app).get(`/categories/tests/subject/${body[0].subject.id}`)
        expect(result.status).toEqual(200);
    })
    it('returns an array for valid url', async ()=>{
        const body = await prepareDatabaseTests(1,true);
        await populateTests(body);
        const result = await supertest(app).get(`/categories/tests/subject/${body[0].subject.id}`);
        expect(result.body.length).toEqual(1);
    })
    it('returns status 404 for empty tests', async ()=>{
        const body = await prepareDatabaseTests(1,true);
        const result = await supertest(app).get(`/categories/tests/subject/1`);
        expect(result.status).toEqual(404);
    })
})