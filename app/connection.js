const { Pool } = require('pg');
require('dotenv').config(); // Loa
module.exports = {
    DB: () => {
        return new Pool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: process.env.DB_PORT,
        });
    },
    TUTELA: () => {
        return new Pool({
            host: '10.62.205.124',
            user: 'dso_postgres',
            password: 'telkom123',
            database: 'production',
            port: 5432,
        });
    }
}