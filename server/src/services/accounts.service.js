const { pool, getPool } = require("../general/db");

/**
 * Retrieves all transaction accounts for a given email id
 */
exports.getAccounts = async (email) => {
	const conn = await getPool();
	try{
		const accounts = await conn.query(`SELECT * FROM budgeter.accounts WHERE user_id=$1`, [email]);
		return accounts.rows;
	}catch(err){
		console.error(err);
		throw err;
	}finally{
		conn.release();
	}
};

/**
 * Calculates account balance 
 */
exports.getAccountBalance = async (email, accountId) => {
	const conn = await getPool();
	try{
		const amountRes = await conn.query(`
			SELECT COALESCE(SUM(amount), 0) as total FROM budgeter.transactions 
			WHERE user_id=$1
			AND account_id=$2
			AND timestamp <= now()
			`, [email, accountId]);
		if(amountRes.rowCount < 1){
			throw new BaseError("Account not found", 404, true, 
				"Sorry, couldn't calculate balance for this account.");
		}

		return amountRes.rows[0].total;
	}catch(err){
		console.error(err);
		throw err;
	}finally{
		conn.release();
	}
};


/**
 * Creates a new account registered under the user making the request
 */
exports.createAccount = async ({name}, email) => {
	const conn = await getPool();
	
	let placeholders = [name, email];
	let insertQuery = `INSERT INTO budgeter.accounts (name, user_id) VALUES ($1, $2) RETURNING *`;
	
	let account = (await conn.query(insertQuery, placeholders)).rows[0];
	
	conn.release();

	return account;
}
