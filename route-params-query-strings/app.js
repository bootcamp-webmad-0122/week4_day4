require("dotenv/config");

require("./db");

const express = require("express");
const hbs = require("hbs");
const app = express();

require("./config")(app);

app.locals.title = 'My app'

const index = require("./routes/index.routes");
app.use("/", index);

require("./error-handling")(app);

module.exports = app