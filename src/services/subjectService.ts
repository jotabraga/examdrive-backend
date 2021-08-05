import { getRepository} from "typeorm";
import Subject from "../entities/Subject";
import { Subjects } from "../interfaces/Subjects";

export async function getSubjectsList():Promise<Subjects[]>{

    const subjects = await getRepository(Subject).find({
        order: {
            termId: "ASC",
        },
    });

    return subjects;
}