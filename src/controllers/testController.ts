import {Request, Response} from "express";
import * as testServices from "../services/testService";

export async function getSubjectTests(req: Request, res: Response){

    const id = parseInt(req.params.subjectId);

    const result = await testServices.getTestsBySubject(id);
    res.send(result);
}

export async function getProfessorTests(req: Request, res: Response){

    const id = parseInt(req.params.professorId);

    const result = await testServices.getTestsByProfessor(id);
    res.send(result);
}

export async function registerTest(req: Request, res: Response){  

    const result = await testServices.registerTest(req.body);
    res.send(result);
}






