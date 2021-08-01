import { getRepository} from "typeorm";
import Class from "../entities/Class";

interface Classes {
    id: number,
    professorId: number,
    subjectId: number
}

export async function getClassesList():Promise<Classes[]>{

    const classes = await getRepository(Class).find();

    return classes;
}