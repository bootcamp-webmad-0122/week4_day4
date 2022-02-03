require("dotenv/config");

require("./db");

const express = require("express");
const hbs = require("hbs");
const app = express();

require("./config")(app);

app.locals.appTitle = `Bookaria_`;


// index routes
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

// books routes
const booksRoutes = require("./routes/books.routes");
app.use("/libros", booksRoutes);


require("./error-handling")(app);

module.exports = app;
