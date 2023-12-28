
const { pool, getPool } = require("../general/db");

/**
 * Retrieves all transaction transactions for a given email id
 */
exports.getTransactions = async (email) => {
	const conn = await getPool();
	try{
		const transactions = await conn.query(`SELECT * FROM budgeter.transactions WHERE user_id=$1`, [email]);
		return transactions.rows;
	}catch(err){
		console.error(err);
		throw err;
	}finally{
		conn.release();
	}
};


/**
 * Creates a new transaction registered under the user making the request
 */
exports.createTransaction = async ({name}, email) => {
	const conn = await getPool();
	
	let placeholders = [name, email];
	let insertQuery = `INSERT INTO budgeter.transactions (name, user_id) VALUES ($1, $2) RETURNING *`;
	
	let transaction = (await conn.query(insertQuery, placeholders)).rows[0];
	
	conn.release();

	return transaction;
}
