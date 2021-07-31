import express from "express";
import cors from "cors";
import "reflect-metadata";
import connectDatabase from "./database";
import * as subjectController from "./controllers/subjectController";
import * as testsController from "./controllers/testsController";


const app = express();
app.use(cors());
app.use(express.json());

export async function init (){
  await connectDatabase();
}

app.get("/subjects", subjectController.listSubjects);

app.get("/tests/:subjectId", testsController.getSubjectTests);

export default app;
