import { getRepository} from "typeorm";
import Category from "../entities/Category";

interface Categories {
    id: number,
    name: string
}

export async function getCategories():Promise<Categories[]>{
    const categories = await getRepository(Category).find();
    return categories;
}