import { Request, Response } from "express";

import * as classService from "../services/classService";

export async function listClasses(req: Request, res: Response){

    const result = await classService.getClassesList();
    res.send(result);
}