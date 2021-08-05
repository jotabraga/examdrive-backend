import { getRepository } from "typeorm";
import Test from "../entities/Test";

interface Tests{
    id: number,
    professorId: number,
    subjectId: number,
    categoryId: number,
    link: string,
    name: string
}

export async function getTestsBySubject(subjectId: number):Promise<Tests[]>{

    const testRepository = getRepository(Test);
    const tests = await testRepository.find({ 
        select: ["id","subjectId","category","name","link"],
        relations: ["professor","subject"],
        where: {
            subjectId: subjectId,
        }
    });
    return tests;
}

export async function getTestsByProfessor(professorId: number):Promise<Tests[]>{

    const testRepository = getRepository(Test);
    const tests = await testRepository.find({ 
        select: ["id","subjectId","category","name","link"],
        relations: ["professor","subject"],
        where: {
            professorId,
        }
    });    
    return tests;
}

export async function registerTest(body: TestBody){

    const {professorId, subjectId, categoryId, link, name} = body;
    console.log(body);

    const testRepository = await getRepository(Test)
        .createQueryBuilder()
        .insert()
        .into(Test)
        .values([
            {
                professorId,
                subjectId,
                categoryId,
                link,
                name
            }
        ]) 
        .returning("id")
        .execute();
        
    return testRepository;
}

interface TestBody{
    professorId: number,
    subjectId: number,
    categoryId: number,
    link: string,
    name: string
}
