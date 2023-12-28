const transactionController = require("../controllers/transactions.controller");
const auth = require("./middleware/auth");
const { Router } = require("express");

const router = Router();

// Get all transactions of user making request
router.get("/api/transactions", auth(), transactionController.getTransactions);

// Get all transactions of an account
router.get("/api/accounts/:id/transactions", auth, transactionController.getAccountTransactions);

// Create a new transaction under a given account id
router.post("/api/accounts/:id/transaction", auth(), transactionController.createTransaction);

// Update an transaction
router.patch("/api/transactions/:id", auth(), transactionController.updateTransaction);

// Delete an transaction
router.delete("/api/transactions/:id", auth(), transactionController.deleteTransaction);



module.exports = router;
