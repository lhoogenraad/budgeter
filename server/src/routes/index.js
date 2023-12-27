/* All these routes will be used in the server */
module.exports = (app) => {
	app.use(require('./users.routes'));
	app.use(require('./accounts.routes'));
};
	
