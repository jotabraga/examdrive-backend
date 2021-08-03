import { Request, Response } from "express";

import * as professorService from "../services/professorService";

export async function listProfessors(req: Request, res: Response){

    try{
        const result = await professorService.getProfessorsList();
        res.send(result);

    } catch (error){
        console.log(error);
        res.sendStatus(500);
    }


}