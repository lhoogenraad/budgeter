const db = require("../general/db");

exports.login = (email, password) => {
	console.log(email, password)
}


exports.getAllUsers = async () => {
	try{
		var conn = await db.connect();
	}catch(err) { 
		console.error('err', err) 
	}
	let users = (await conn.query(`SELECT * FROM budgeter.users`)).rows;
	
	conn.release();
	return users;
}
