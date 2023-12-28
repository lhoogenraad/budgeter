const accountService = require("../services/accounts.service");


exports.getAccounts = async (req, res, next) => {
	try{
		const accounts = await accountService.getAccounts(req.tokenfields.email);
		return res.status(200).json(accounts);
	}catch(err){
		next(err);
	}
};


exports.getAccountBalance = async (req, res, next) => {
	try{
		const balance = await accountService.getAccountBalance(req.tokenfields.email, req.params.id);
		return res.status(200).json(balance);
	}catch(err){
		next(err);
	}
};

exports.createAccount = async (req, res, next) => {
	try{
		const account = await accountService.createAccount(req.body, req.tokenfields.email);
		return res.status(201).json(account)
	}catch(err){
		next(err);
	}
}


exports.updateAccount = async (req, res, next) => {
	try{
		const account = await accountService.updateAccount(req.params.id, req.body, req.tokenfields.email);
		return res.status(200).json(account)
	}catch(err){
		next(err);
	}
}


exports.deleteAccount = async (req, res, next) => {
	try{
		const account = await accountService.deleteAccount(req.params.id, req.body, req.tokenfields.email);
		return res.status(201).json(account)
	}catch(err){
		next(err);
	}
}
