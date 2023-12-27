const { Pool } = require("pg");
const BaseError = require("../routes/middleware/errorHandling/BaseError");
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
	ssl: false,
    max: 40,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 20000,
    allowExitOnIdle: true,
}

const pool = new Pool(dbConfig);

const getPool = async () => {
	try{
		const connection = await pool.connect();
		return connection;
	}catch(err){
		console.error(err);
		throw new BaseError("DB connection error", 500, false, "Sorry, the database appears to be down.", true);
	}
}

exports.pool = pool;

exports.getPool = getPool;
