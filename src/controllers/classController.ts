import { Request, Response } from "express";

import * as classService from "../services/classService";

export async function getSubjectClasses(req: Request, res: Response){

    try{
        const id = parseInt(req.params.subjectId);
        const classes = await classService.getSubjectClasses(id);

        if(!classes) return res.sendStatus(404);
        if(classes.length === 0) return res.sendStatus(404);
        res.status(200).send(classes);   

    }catch (err) {
        console.log(err);
    }
}