require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// controller
const stripeController = require("./controllers/stripeController");
const mainController = require("./controllers/main");
// error handler
const notFoundMiddleware = require("./middleware/notfound");
const errorHandlerMiddleware = require("./middleware/errorhandler");

app.use(express.json());
// app.use(express.static("./public"));

app.post("/stripe", stripeController);
app.get("/", mainController);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = 5500;

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
