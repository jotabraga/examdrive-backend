import { Request, Response } from "express";

import * as subjectService from "../services/subjectService";

export async function getAllSubjects(req: Request, res: Response){

    try{
        const subjects = await subjectService.getSubjectsList();
        res.status(200).send(subjects);
    
    }catch (err){
        console.log(err);
    }
}