const { Router } = require("express");

const router = Router();

// Login route
router.get("/api/auth/login", (req, res) => res.status(200).json("Login route"));

module.exports = router;
