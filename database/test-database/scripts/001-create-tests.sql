CREATE TABLE "tests" (
  "id" SERIAL PRIMARY KEY,
  "professorId" INTEGER NOT NULL,
  "subjectId" INTEGER NOT NULL,
  "categoryId" INTEGER NOT NULL,
  "link" TEXT NOT NULL,
  "name" TEXT NOT NULL  
);