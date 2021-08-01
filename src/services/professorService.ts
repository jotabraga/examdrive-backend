import { getRepository} from "typeorm";
import Professor from "../entities/Professor";

interface Professors {
    id: number,
    name: string
}

export async function getProfessorsList():Promise<Professors[]>{

    const professors = await getRepository(Professor).find();

    return professors;
}