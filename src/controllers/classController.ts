import { Request, Response } from "express";

import * as classService from "../services/classService";

export async function getSubjectClasses(req: Request, res: Response){

    const id = parseInt(req.params.subjectId);

    const result = await classService.getSubjectClasses(id);
    res.send(result);
}