import { Request, Response } from "express";

import * as professorService from "../services/professorService";

export async function listProfessors(req: Request, res: Response){

    try{
        const professors = await professorService.getProfessorsList();
        res.status(200).send(professors);

    } catch (err){
        console.log(err);
    }
}

export async function getProfessorsBySubjectId(req: Request, res: Response){

    try{
        const subjectId = parseInt(req.params.subjectId);
        const professors = await professorService.getProfessorsBySubjectId(subjectId);
        res.status(200).send(professors);

    } catch(err) {
        console.log(err);
    }
}