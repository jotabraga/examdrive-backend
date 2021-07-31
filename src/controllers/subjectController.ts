import { Request, Response } from "express";

import * as subjectService from "../services/subjectService";

export async function listSubjects(req: Request, res: Response){

    const result = await subjectService.getSubjectsList();
    res.send(result);
}