import { getConnection, getManager } from "typeorm";
import { init } from "../../src/app";
import "../../src/setup";

export async function startConnection() {
  await init();
}
export async function endConnection() {
  await getConnection().close();
}

export async function clearDatabase() {
  await getManager().query("TRUNCATE categories RESTART IDENTITY CASCADE");
  await getManager().query("TRUNCATE professors RESTART IDENTITY CASCADE");
  await getManager().query("TRUNCATE subjects RESTART IDENTITY CASCADE");
  await getManager().query("TRUNCATE teams RESTART IDENTITY CASCADE");
  await getManager().query("TRUNCATE terms RESTART IDENTITY CASCADE");
  await getManager().query("TRUNCATE tests RESTART IDENTITY CASCADE");
}
