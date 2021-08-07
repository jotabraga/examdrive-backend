import { getRepository } from "typeorm";
import Test from "../entities/Test";
import { Tests, TestBody} from "../interfaces/Test";

export async function getTestsBySubject(subjectId: number):Promise<Tests[]>{

    const testRepository = getRepository(Test);
    const tests = await testRepository.find({ 
        select: ["id","subjectId","category","name","link"],
        relations: ["professor","subject","category"],
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
    await getRepository(Test).insert(body);
}


