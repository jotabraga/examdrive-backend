import { getRepository} from "typeorm";
import Team from "../entities/Team";

interface Classes {
    id: number,
    professorId: number,
    subjectId: number
}

export async function getClassesList():Promise<Classes[]>{

    const teams = await getRepository(Team).find();

    return teams;
}