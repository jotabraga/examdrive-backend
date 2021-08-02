import { getConnectionManager } from "typeorm";
import dotenv from "dotenv";
import path from "path";

const envPath = process.env?.NODE_ENV === "test" ? ".env.test.local" : ".env";
dotenv.config({ path: path.resolve(".", envPath) });
const { DB_NAME, DB_TYPE, DB_URL} = process.env;

export default async function connect () {
  const connectionManager = await getConnectionManager();
  const connection = connectionManager.create({
      name: DB_NAME,
      type: 'postgres',
      url: DB_URL,
      entities: ["src/entities/*.ts"]
     
  });
  await connection.connect();
  return connection;
}