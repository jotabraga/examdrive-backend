import supertest from "supertest";
import app,{ init } from "../../src/app";

beforeAll(async () => {
    await init();
    
})