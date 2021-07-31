import {Request, Response} from "express";
import * as testsServices from "../services/testsService";

export async function getSubjectTests(req: Request, res: Response){

    const id = parseInt(req.params.subjectId);

    const result = await testsServices.getTestsBySubject(id);
    res.send(result);

}


