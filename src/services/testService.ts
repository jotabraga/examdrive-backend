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
