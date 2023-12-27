require("dotenv").config();

// Returns error to the express request. Also notifies if 
function returnError (err, req, res, next) {
	// Check if err is instance of our defined BaseError and that error actually exists.
	if(err instanceof BaseError && err){
		handleCriticalError(err);
		return res.status(err.statusCode || 500).json(err.description);
	}else{
		/* In here we could also json an email to our greenhalo support inbox or something */
		return res.status(500).json(`Internal server error. Please try again later`);
	}
}

function handleCriticalError (err) {
	console.error(`Holy moly something has gone terribly wrong. This critical error handler should probably 
		have some key email contacts to notify of these errors...`);
}

// Refer to the single line of code below
function logError (err) {
	console.error(err);
}

// Logs error and goes next with err. Could be deprecated once the custom server logging is implemented.
function logErrorMiddleware (err, req, res, next) {
	logError(err);
	next(err);
}


// Checks if error is operational or programmer
function isOperationalError(error) {
	if (error instanceof BaseError) {
		return error.isOperational;
	}
	return false;
}


module.exports = {
	logError,
	logErrorMiddleware,
	returnError,
	isOperationalError
}

