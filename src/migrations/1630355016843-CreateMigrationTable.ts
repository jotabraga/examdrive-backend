import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMigrationTable1630355016843 implements MigrationInterface {
    name = 'CreateMigrationTable1630355016843'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "terms" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "period" character varying NOT NULL, CONSTRAINT "PK_33b6fe77d6ace7ff43cc8a65958" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "termId" integer NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tests" ("id" SERIAL NOT NULL, "professorId" integer NOT NULL, "subjectId" integer NOT NULL, "categoryId" integer NOT NULL, "link" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_4301ca51edf839623386860aed2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teams" ("id" SERIAL NOT NULL, "professorId" integer NOT NULL, "subjectId" integer NOT NULL, CONSTRAINT "PK_7e5523774a38b08a6236d322403" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_c30a2867f3d9917aee56d2ef14d" FOREIGN KEY ("termId") REFERENCES "terms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_910215de6563cf9f350eeb60a1d" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_3557744b71edc782e1882c84776" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_a59dc4db9bd3d8407148a9b214b" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "FK_ed9953d806794df081c63e2e649" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "FK_ea7419376b4d2373efd7b6eb880" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "FK_ea7419376b4d2373efd7b6eb880"`);
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "FK_ed9953d806794df081c63e2e649"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_a59dc4db9bd3d8407148a9b214b"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_3557744b71edc782e1882c84776"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_910215de6563cf9f350eeb60a1d"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_c30a2867f3d9917aee56d2ef14d"`);
        await queryRunner.query(`DROP TABLE "teams"`);
        await queryRunner.query(`DROP TABLE "professors"`);
        await queryRunner.query(`DROP TABLE "tests"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
        await queryRunner.query(`DROP TABLE "terms"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
