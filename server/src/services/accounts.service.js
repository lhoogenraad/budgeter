const { pool, getPool } = require("../general/db");

/**
 * Retrieves all transaction accounts for a given email id
 */
exports.getAccounts = async (email) => {
	console.log('service email:', email)
	console.log(1)
	const conn = await getPool();
	console.log(2)
	try{
		const accounts = await conn.query(`SELECT * FROM budgeter.accounts WHERE user_id=$1`, [email]);
		return accounts
	}catch(err){
		console.error(err);
		throw err;
	}finally{
		conn.release();
	}
};
