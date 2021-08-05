import { getRepository} from "typeorm";
import Team from "../entities/Team";
import Professor from "../entities/Professor";

export async function getProfessorsList(){

    const professors = await getRepository(Professor)
        .createQueryBuilder("professors")
        .select("professors")
        .leftJoin("professors.tests", "tests")
        .loadRelationCountAndMap("professors.testsCount", "professors.tests")
        .orderBy("professors.name")
        .getMany();

    return professors;
}

export async function getProfessorsBySubjectId(subjectId: number){

    const classes = await getRepository(Team).find({
        where: { subjectId },
        relations: ["professor"]
    });

    const professors = classes.map((c) => c.professor);
    return professors;
}