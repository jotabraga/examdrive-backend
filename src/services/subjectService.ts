import { getRepository} from "typeorm";
import Subject from "../entities/Subject";

interface Subjects {
    id: number,
    name: string,
    termId: number
}

export async function getSubjectsList():Promise<Subjects[]>{

    const subjects = await getRepository(Subject).find({
        order: {
            termId: "ASC",
        },
    });

    return subjects;
}