import { getRepository } from "typeorm";
import faker from "faker";
import Professor from "../../src/entities/Professor";

export async function insertProfessors(){
    const professors:{name:string}[] = [];
    
    for(let i=1;i<6;i++){
        professors.push({
            name:faker.name.firstName()
        })
    }
    
    await getRepository(Professor).insert(professors)
    return;
}