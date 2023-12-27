const users = require("../services/users.service");

exports.login = async (req, res, next) => {
	try{
		let token = users.login(req.body.email, req.body.password);
		return res.status(200).json(token);
	}catch(err){
		next(err);
	}
};


exports.getAllUsers = async (req, res, next) => {
	try{
		let userList = await users.getAllUsers();
		return res.status(200).json(userList);
	}catch(err){
		next(err);
	}
};
