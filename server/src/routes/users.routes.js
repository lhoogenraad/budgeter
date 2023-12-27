const users = require("../controllers/users.controller");
const { Router } = require("express");

const router = Router();

// Login route
router.post("/api/auth/login", users.login);

module.exports = router;
