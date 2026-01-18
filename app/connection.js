const { default: PG } = require('pg');
const mysql = require('mysql2/promise')
const { Pool } = require('pg');
require('dotenv').config();
module.exports = {
    MY: () => {
        return mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: process.env.DB_PORT,
        });
    },
    PG: () => {
        return new Pool({
            host: process.env.DB_HOST_PG,
            user: process.env.DB_USER_PG,
            password: process.env.DB_PASSWORD_PG,
            database: process.env.DB_DATABASE_PG,
            port: process.env.DB_PORT_PG,
        });
    },    
}