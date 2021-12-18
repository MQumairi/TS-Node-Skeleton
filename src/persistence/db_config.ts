import { ConnectionOptions } from "typeorm";

let db_config: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  database: process.env.DBNAME,
  entities: [],
  synchronize: true,
  logging: false,
};

export default db_config;
