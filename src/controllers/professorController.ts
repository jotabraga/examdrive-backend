import { Request, Response } from "express";

import * as professorService from "../services/professorService";

export async function listProfessors(req: Request, res: Response){
    try{
        const professors = await professorService.getProfessorsList();
        res.send(professors);

    } catch (error){
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getProfessorsBySubjectId(req: Request, res: Response){
    try{
        const subjectId = Number(req.params.subjectId);
        const professors = await professorService.getProfessorsBySubjectId(subjectId);
        res.send(professors);

    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
}