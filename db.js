const Pool = require('pg').Pool;
require('dotenv').config()

const pool = new Pool({
    database: process.env.DB,
    user: process.env.DB_USER,
    port: process.env.DBPORT,
    host: process.env.HOST,
    password: process.env.PW,
//    ssl: {rejectUnauthorized: false},
});

module.exports = pool;