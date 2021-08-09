import { getRepository } from "typeorm";
import Team from "../../src/entities/Team";

export async function createClasses(){
    const teams:{professorId:number; subjectId:number}[] = [];

    for(let i=1;i<6;i++){
        teams.push({
            professorId: i,
            subjectId: i 
        });
    }
    
    await getRepository(Team).insert(teams);
    return;
}