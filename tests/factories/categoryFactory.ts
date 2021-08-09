import { getRepository } from "typeorm";
import Category from "../../src/entities/Category";

export async function insertCategories(){
    await getRepository(Category).insert([{name:'P1'},{name:'P2'},{name:'P3'},{name:'P4'},{name:'Sub'},{name:'Outras'}]);
    return;
}