const jwt = require("jsonwebtoken");
require("dotenv").config();

/*
 * All this method really does is check that the format of the auth token is "Bearer <token>"
 * and that the token is valid and hasn't expired yet.
 */
module.exports = () => {
	return async (req, res, next) => {
		//find JWT in headers
		const token = req.headers["authorization"];
		if (!token) {
			return res.status(401).send("Access Denied: No token.");
		}
		if (token.split(" ").length != 2 || token.split(" ")[0] != "Bearer") {
			return res.status(401).send("Access Denied: Invalid token format. Token must have format Bearer <auth_token>");
		}

		//validate JWT
		let decoded;
		const tokenBody = token.slice(7);

		try {
			decoded = jwt.verify(tokenBody, process.env.SECRET);
		} catch (error) {
			return res.status(401).send("Access denied: Unable to verify token.");
		}

		// If the authentication gets to this point, a user should be authenticated
		return next();
	};
};
