const accountController = require("../controllers/accounts.controller");
const auth = require("./middleware/auth");
const { Router } = require("express");

const router = Router();

// Get all accounts of user making request
router.get("/api/accounts", auth(), accountController.getAccounts);


// Create a new account
router.post("/api/accounts", auth(), accountController.createAccount);

// Update an account
router.patch("/api/accounts/:id", auth(), accountController.updateAccount);

// Delete an account
router.delete("/api/accounts/:id", auth(), accountController.deleteAccount);



module.exports = router;
