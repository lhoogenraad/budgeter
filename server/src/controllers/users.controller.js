const users = require("../services/users.service");

exports.signup = async (req, res, next) => {
	try{
		let signupToken = await users.signup(req.body.email, req.body.password);
		return res.status(200).json(signupToken);
	}catch(err){
		console.error('err caught', err)
		next(err);
	}
}

exports.login = async (req, res, next) => {
	try{
		let token = await users.login(req.body.email, req.body.password);
		return res.status(200).json(token);
	}catch(err){
		next(err);
	}
};


