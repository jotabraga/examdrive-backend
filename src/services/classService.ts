import { getRepository} from "typeorm";
import Team from "../entities/Team";

interface Classes {
    id: number,
    professorId: number,
    subjectId: number
}

export async function getSubjectClasses(id: number):Promise<Classes[]>{

    const teams = await getRepository(Team).find({
        relations: ["professor"],
        where: {subjectId: id}
    });

    return teams;
}