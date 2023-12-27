const { pool, getPool } = require("../general/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const SALT_ROUNDS = 10;

/**
 * @desc Attempts to save a new user in the db, and return a new jwt auth token
 * signed with the .env secret.
 *
 * Passwords will be hashed with bcrypt.
 *
 * @returns auth token if signup is successful
 * @throws BaseError dependant on the erorr that's happened
 */
exports.signup = async (email, password) => {
	const conn = await getPool();

	try{
		await conn.query("BEGIN");
		let hashedPword = bcrypt.hash(password, SALT_ROUNDS);
		let placeholders = [email, hashedPword];
		await conn.query(`INSERT INTO budgeter.users 
			(email, password)
			VALUES
			($1, $2)`, placeholders);
		await conn.query("COMMIT");
	}catch(err){
		await conn.query("ROLLBACK");
		if(err.constraint == 'users_pkey'){
			console.log('PLEASE')
			throw new BaseError("User already exists", 400, true, "A user with this email already exists.");
		}
		throw err;
	}finally{
		conn.release();
	}

	const token = jwt.sign({
		email: email,
	}, process.env.SECRET, {expiresIn: '10h'});

	return token;
}

exports.login = async (email, password) => {}



