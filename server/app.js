// Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());

require("./src/routes")(app);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
