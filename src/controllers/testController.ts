import {Request, Response} from "express";
import * as testServices from "../services/testService";

export async function getSubjectTests(req: Request, res: Response){

    try{
        const id = parseInt(req.params.subjectId);
        const tests = await testServices.getTestsBySubject(id);
    
        if(!tests) return res.sendStatus(404);
        res.status(200).send(tests);

    } catch (err) {
        console.log(err);
    }
}

export async function getProfessorTests(req: Request, res: Response){

    try{
        const id = parseInt(req.params.professorId);
        const tests = await testServices.getTestsByProfessor(id);

        if(!tests) return res.sendStatus(404);
        res.status(200).send(tests);

    } catch (err) {
        console.log(err);
    }
}

export async function registerTest(req: Request, res: Response){  

    try{
        const {professorId, subjectId, categoryId, link, name} = req.body;
        if(!professorId || !subjectId || !categoryId || !link || !name ) return res.sendStatus(400);

        await testServices.registerTest(req.body);
        res.sendStatus(201);
    
    } catch (err) {
        console.log(err);
    }
}






