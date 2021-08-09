import Test from "../../src/entities/Test";
import faker from "faker";
import { getRepository } from "typeorm";
import * as categoryFactory from "./categoryFactory";
import * as subjectFactory from "./subjectFactory";
import * as professorFactory from "./professorFactory";
import { TestBody } from "../../src/interfaces/Test";

export async function createTest(){
    const name = faker.name.title();
    const link = faker.internet.url();
    await categoryFactory.insertCategories();
    await subjectFactory.insertSubjects();
    await professorFactory.insertProfessors();
    await getRepository(Test).insert({
        professorId: 1,
        subjectId: 1,
        categoryId: 1,
        link,
        name
    });
}

export async function getValidParams():Promise<TestBody>{
    const name = faker.name.title();
    const link = faker.internet.url();
    const validBody = {
        professorId: 1,
        subjectId: 1,
        categoryId: 1,
        link,
        name
    };
    return validBody;
}

