const users = require("../controllers/users.controller");
const { Router } = require("express");

const router = Router();

// Signup route
router.post("/api/auth/signup", users.signup);


// Login route
router.post("/api/auth/login", users.login);




module.exports = router;
