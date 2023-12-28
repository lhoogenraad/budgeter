
const { pool, getPool } = require("../general/db");

/**
 * Retrieves all transaction transactions for a given email id
 */
exports.getAccountTransactions = async (accountId, email) => {
	const conn = await getPool();
	try{
		const transactions = await conn.query(`SELECT * FROM budgeter.transactions 
			WHERE user_id=$1 AND account_id=$2`, [email, accountId]);
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
exports.createTransaction = async (accountId, { name, amount, timestamp }, email) => {
	const conn = await getPool();
	
	let placeholders = [email, accountId, name, amount, timestamp];
	let insertQuery = `INSERT INTO budgeter.transactions (user_id, account_id, name, amount, timestamp)
	VALUES ($1, $2, $3, $4, $5) RETURNING *`;
	
	try{
	let transaction = (await conn.query(insertQuery, placeholders)).rows[0];
	}catch(err){
		if(err.constraint == 'account_fkey'){
			throw new BaseError("Transaction account fkey failure", 404, true, 
				"Sorry, we couldn't seem to link a transaction to this account!");
		}
		throw err;
	}
	
	conn.release();

	return transaction;
}
