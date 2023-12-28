const jwt = require("jsonwebtoken");

const parse = (req, res, next) => {
	if(req.headers.authorization){
		const tokenFields = jwt.decode(req.headers.authorization.split(" ")[1]);
		req.tokenfields = tokenFields;
	}

	return next();
};

module.exports = parse;
