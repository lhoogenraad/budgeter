class BaseError extends Error {
	constructor (name, statusCode, isOperational, description, critical=false){
		super(description);

		Object.setPrototypeOf(this, new.target.prototype);

		this.name = name;
		this.statusCode = statusCode;
		this.isOperational = isOperational;
		this.description = description;
		this.critical = critical;
		Error.captureStackTrace(this);
	}
}

module.exports = BaseError;

