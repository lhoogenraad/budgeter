const jwt = require("jsonwebtoken");
const definedRoles = require("./roles");

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
			decoded = jwt.verify(tokenBody, process.env.JWT_SECRET);
		} catch (error) {
			return res.status(401).send("Access denied: Unable to verify token.");
		}

		// If the authentication gets to this point, a user should be authenticated
		return next();
	};
};
