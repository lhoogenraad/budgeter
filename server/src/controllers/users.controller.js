const jwt = require("jsonwebtoken");
const users = require("../services/users.service");

console.log("users controller")


exports.login = async (req, res) => {
	try{
		let token = await users.login(req.body.email, req.body.password);
		return res.status(200).json(token);
	}catch(err){
		next(err);
	}
};
