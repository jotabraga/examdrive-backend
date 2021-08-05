import { getRepository} from "typeorm";
import Team from "../entities/Team";
import Professor from "../entities/Professor"

interface Professors {
    id: number,
    name: string
}

export async function getProfessorsList():Promise<Professors[]>{

    const professors = await getRepository(Professor).find();

    return professors;
}

export async function getProfessorsBySubjectId(subjectId: number):Promise<Professors[]>{

    const classes = await getRepository(Team).find({
        where: { subjectId },
        relations: ["professor"]
    });

    const professors = classes.map((c) => c.professor);

    return professors;
}