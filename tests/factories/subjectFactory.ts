import { getRepository } from "typeorm";
import Subject from "../../src/entities/Subject";
import faker from "faker";
import Professor from "../../src/entities/Professor";

export async function insertSubjects() {
  const subjects: { name: string; termId: number }[] = [];

  for (let i = 1; i < 6; i++) {
    subjects.push({
      name: faker.name.title(),
      termId: i,
    });
  }

  await getRepository(Subject).insert(subjects);
  return;
}

