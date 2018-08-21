// Dependencies ------------------------------------------
const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const routes = require("./controllers/controller.js");

// PORT --------------------------------------------------
const PORT = process.env.PORT || 8080;

// Run Express --------------------------------------------
const app = express();

// Static content -----------------------------------------
app.use('/static', express.static('public/assets'));

// Parsers/Middleware -------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting up Handlebars ----------------------------------
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Main Router --------------------------------------------
app.use(routes);

// Error Handling -----------------------------------------
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

// Listening ----------------------------------------------
db.sequelize.sync({force: true}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
  });
});
