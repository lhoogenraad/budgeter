// Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./src/general/db")
const { returnError } = require("./src/routes/middleware/errorHandling/handler");

global.BaseError = require("./src/routes/middleware/errorHandling/BaseError");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());

require("./src/routes")(app);

app.use(returnError);

// Standard error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
