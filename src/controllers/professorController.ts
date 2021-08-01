import { Request, Response } from "express";

import * as professorService from "../services/professorService";

export async function listProfessors(req: Request, res: Response){

    const result = await professorService.getProfessorsList();
    res.send(result);
}