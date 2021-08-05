import express from "express";
import cors from "cors";
import "reflect-metadata";
import connectDatabase from "./database";
import * as subjectController from "./controllers/subjectController";
import * as testController from "./controllers/testController";
import * as professorController from "./controllers/professorController";
import * as classController from "./controllers/classController";
import * as categoryController from "./controllers/categoryController"

const app = express();
app.use(cors());
app.use(express.json());

export async function init (){
  await connectDatabase();
}

app.get("/subjects", subjectController.listSubjects);

app.get("/professors", professorController.listProfessors);

app.get("/categories", categoryController.getCategories);

app.get("/professors/:subjectId", professorController.getProfessorsBySubjectId);

app.get("/classes/:subjectId", classController.getSubjectClasses);

app.get("/subject-tests/:subjectId", testController.getSubjectTests);

app.get("/professor-tests/:professorId", testController.getProfessorTests);

app.post("/register-test", testController.registerTest);


export default app;
