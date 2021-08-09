import { getRepository } from "typeorm";
import Subject from "../../src/entities/Subject";
import faker from "faker";
import Professor from "../../src/entities/Professor";

export async function insertSubjects(){
    const subjects:{name:string;termId:number}[] = [];

    for(let i=1;i<6;i++){
        subjects.push({
            name:faker.name.title(),
            termId: i 
        })
    }
    
    await getRepository(Subject).insert(subjects);
    return;
}

// export async function createSubjectProfessorRelation(subjectId:number,professorId:number){
//     const professor = await getRepository(Professor).findOne({where:{id:professorId}})
//     const subject = new Subject();
//     subject.id = subjectId;
//     subject.professors = [professor];
//     await getRepository(Subject).save(subject)
//     const subjectUpdated = await getRepository(Subject).findOne({where:{id:subjectId},relations:['professors']})
//     return subjectUpdated;
// }