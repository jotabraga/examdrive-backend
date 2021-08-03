import { Request, Response } from "express";

import * as testCategoryService from "../services/testCategoryService";

export async function getTestCategories(req: Request, res: Response){

    const result = await testCategoryService.getTestCategories();
    res.send(result);
}