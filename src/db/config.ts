import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos";
import dotenv from "dotenv";

dotenv.config();

const DATABASE_HOST = process.env.DB_HOST;
const DATABASE_PASSWORD = process.env.DB_PASSWORD;

const connection = new Sequelize({
  dialect: "mysql",
  host: DATABASE_HOST as string,
  username: "root",
  password: DATABASE_PASSWORD as string,
  database: "todo",
  logging: false,
  models: [Todos],
});

export default connection;
