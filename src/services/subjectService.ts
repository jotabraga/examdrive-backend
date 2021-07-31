import { getRepository} from "typeorm";
import Subject from "../entities/Subject";

interface Subjects {
    id: number,
    name: string,
    period: string
}

export async function getSubjectsList():Promise<Subjects[]>{

    const subjects = await getRepository(Subject).find();

    return subjects;
}