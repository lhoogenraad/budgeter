
const transactionService = require("../services/transactions.service");


exports.getTransactions = async (req, res, next) => {
	try{
		const transactions = await transactionService.getTransactions(req.tokenfields.email);
		return res.status(200).json(transactions);
	}catch(err){
		next(err);
	}
};


exports.createTransaction = async (req, res, next) => {
	try{
		const transaction = await transactionService.createTransaction(req.body, req.tokenfields.email);
		return res.status(201).json(transaction)
	}catch(err){
		next(err);
	}
}


exports.updateTransaction = async (req, res, next) => {
	try{
		const transaction = await transactionService.updateTransaction(req.params.id, req.body, req.tokenfields.email);
		return res.status(200).json(transaction)
	}catch(err){
		next(err);
	}
}


exports.deleteTransaction = async (req, res, next) => {
	try{
		const transaction = await transactionService.deleteTransaction(req.params.id, req.body, req.tokenfields.email);
		return res.status(201).json(transaction)
	}catch(err){
		next(err);
	}
}
