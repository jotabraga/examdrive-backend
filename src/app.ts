import express from "express";
import cors from "cors";
import "reflect-metadata";
import connectDatabase from "./database";
import * as subjectController from "./controllers/subjectController";
import * as testsController from "./controllers/testController";
import * as professorController from "./controllers/professorController";
import * as classController from "./controllers/classController";

const app = express();
app.use(cors());
app.use(express.json());

export async function init (){
  await connectDatabase();
}

app.get("/subjects", subjectController.listSubjects);

app.get("/professors", professorController.listProfessors);

app.get("/classes", classController.listClasses);

app.get("/subject-tests/:subjectId", testsController.getSubjectTests);

app.get("/professor-tests/:professorId", testsController.getProfessorTests);

app.get("/test/:id", testsController.getTestById);

export default app;
