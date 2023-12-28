
const transactionService = require("../services/transactions.service");


exports.getTransactions = async (req, res, next) => {
	try{
		const transactions = await transactionService.getTransactions(req.tokenfields.email);
		return res.status(200).json(transactions);
	}catch(err){
		next(err);
	}
};


exports.getAccountTransactions = async (req, res, next) => {
	try{
		const transactions = await transactionService.getAccountTransactions(req.params.accountId, req.tokenfields.email);
		return res.status(200).json(transactions);
	}catch(err){
		next(err);
	}
};


exports.createTransaction = async (req, res, next) => {
	try{
		if(req.body.amount == 0){
			throw new BaseError("Invalid transaction amount", 400, true, "Sorry, the transaction amount cannot be 0.");
		}
		const transaction = await transactionService.createTransaction(req.params.accountId, req.body, req.tokenfields.email);
		return res.status(201).json(transaction)
	}catch(err){
		next(err);
	}
}


exports.updateTransaction = async (req, res, next) => {
	try{
		const transaction = await transactionService.updateTransaction(req.params.accountId, req.params.id, req.body, req.tokenfields.email);
		return res.status(200).json(transaction)
	}catch(err){
		next(err);
	}
}


exports.deleteTransaction = async (req, res, next) => {
	try{
		const transaction = await transactionService.deleteTransaction(req.params.accountId, req.params.id, req.tokenfields.email);
		return res.status(201).json(transaction)
	}catch(err){
		next(err);
	}
}
