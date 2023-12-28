// Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./src/general/db")
const token = require("./src/routes/middleware/token");
const { returnError } = require("./src/routes/middleware/errorHandling/handler");

global.BaseError = require("./src/routes/middleware/errorHandling/BaseError");

require("dotenv").config();
const cors_origin = `http://localhost:3001`
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(token);

// CORS
app.use(cors({
    origin: cors_origin,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Origin", "Content-Type", "Authorization", "X-Auth-Token"],
    credentials: true
}));

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
