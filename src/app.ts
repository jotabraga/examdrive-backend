import express from "express";
import cors from "cors";
import "reflect-metadata";
import connectDatabase from "./database";
import * as subjectController from "./controllers/subjectController";


const app = express();
app.use(cors());
app.use(express.json());

export async function init (){
  await connectDatabase();
}

app.get("/subjects", subjectController.listSubjects);

export default app;
