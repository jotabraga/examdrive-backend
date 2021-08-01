import { getRepository } from "typeorm";
import Test from "../entities/Test";

interface Tests{
    id: number,
    professorId: number,
    subjectId: number,
    category: string,
    link: string,
    name: string
}

export async function getTestsBySubject(subjectId: number):Promise<Tests[]>{

    const testRepository = getRepository(Test);
    const tests = await testRepository.find({ 
        select: ["subjectId","category","name","link"],
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
        select: ["subjectId","category","name","link"],
        relations: ["professor","subject"],
        where: {
            professorId,
        }
    });    
    return tests;
}

export async function getTestById(id: number):Promise<Tests[]>{

    const testRepository = getRepository(Test);
    const test = await testRepository.find({ id });
    return test;
}