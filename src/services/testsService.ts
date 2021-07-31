import { getRepository } from "typeorm";
import Test from "../entities/Test";

export async function getTestsBySubject(subjectId: number){

    const testRepository = getRepository(Test);
    const tests = await testRepository.find({ subjectId });
    return tests;

}