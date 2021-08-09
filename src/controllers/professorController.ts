import { Request, Response } from "express";

import * as professorService from "../services/professorService";

export async function getAllProfessors(req: Request, res: Response){

    try{
        const professors = await professorService.getAll();
        if(!professors) return res.status(404);
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