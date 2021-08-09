import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAllTables1628470505360 implements MigrationInterface {
    name = 'CreateAllTables1628470505360'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."terms" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "public"."terms" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."terms" ADD "period" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."categories" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."subjects" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."subjects" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."tests" DROP COLUMN "link"`);
        await queryRunner.query(`ALTER TABLE "public"."tests" ADD "link" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."tests" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."tests" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."professors" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."professors" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."subjects" ADD CONSTRAINT "FK_c30a2867f3d9917aee56d2ef14d" FOREIGN KEY ("termId") REFERENCES "terms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tests" ADD CONSTRAINT "FK_910215de6563cf9f350eeb60a1d" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tests" ADD CONSTRAINT "FK_3557744b71edc782e1882c84776" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."tests" ADD CONSTRAINT "FK_a59dc4db9bd3d8407148a9b214b" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."teams" ADD CONSTRAINT "FK_ed9953d806794df081c63e2e649" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."teams" ADD CONSTRAINT "FK_ea7419376b4d2373efd7b6eb880" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."teams" DROP CONSTRAINT "FK_ea7419376b4d2373efd7b6eb880"`);
        await queryRunner.query(`ALTER TABLE "public"."teams" DROP CONSTRAINT "FK_ed9953d806794df081c63e2e649"`);
        await queryRunner.query(`ALTER TABLE "public"."tests" DROP CONSTRAINT "FK_a59dc4db9bd3d8407148a9b214b"`);
        await queryRunner.query(`ALTER TABLE "public"."tests" DROP CONSTRAINT "FK_3557744b71edc782e1882c84776"`);
        await queryRunner.query(`ALTER TABLE "public"."tests" DROP CONSTRAINT "FK_910215de6563cf9f350eeb60a1d"`);
        await queryRunner.query(`ALTER TABLE "public"."subjects" DROP CONSTRAINT "FK_c30a2867f3d9917aee56d2ef14d"`);
        await queryRunner.query(`ALTER TABLE "public"."professors" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."professors" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."tests" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."tests" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."tests" DROP COLUMN "link"`);
        await queryRunner.query(`ALTER TABLE "public"."tests" ADD "link" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."subjects" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."subjects" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."categories" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."terms" DROP COLUMN "period"`);
        await queryRunner.query(`ALTER TABLE "public"."terms" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."terms" ADD "number" integer NOT NULL`);
    }

}
