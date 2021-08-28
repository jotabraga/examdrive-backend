import { Request, Response } from "express";

import * as subjectService from "../services/subjectService";

export async function getAllSubjects(req: Request, res: Response){

    try{
        const subjects = await subjectService.getSubjectsList();
        if(subjects.length === 0) return res.sendStatus(404);
        res.status(200).send(subjects);
    
    }catch (err){
        console.log(err);
    }
}