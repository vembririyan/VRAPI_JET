import "dotenv/config";

import mysql from "mysql2/promise";
import pkg from "pg";

export const mysqlPool = mysql.createPool({
  host: process.env.DB_HOST_MY,
  user: process.env.DB_USER_MY,
  password: process.env.DB_PASSWORD_MY,
  database: process.env.DB_DATABASE_MY,
  port: Number(process.env.DB_PORT_MY),
});

export const postgresPool = new pkg.Pool({
  host: process.env.DB_HOST_PG,
  user: process.env.DB_USER_PG,
  password: process.env.DB_PASSWORD_PG,
  database: process.env.DB_DATABASE_PG,
  port: Number(process.env.DB_PORT_PG),
});
