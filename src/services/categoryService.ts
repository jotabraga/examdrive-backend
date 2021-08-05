import { getRepository} from "typeorm";
import Category from "../entities/Category";
import { Categories } from "../interfaces/Categories";

export async function getCategories():Promise<Categories[]>{
    
    const categories = await getRepository(Category).find();
    return categories;
}