const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
// makes out .env file available to be used in the whole application
require("dotenv").config();

//connects our applications to mongodb atlas
const { mongooseConnect } = require("./mongoose.js");
mongooseConnect();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
//const blogsRouter = require("./routes/blogs");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//app.get is only used in the routes file
app.use(logger("dev"));
app.use(express.json()); //helps us get the JSON data
app.use(express.urlencoded({ extended: false })); //helps us get the JSON data
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
//app.use("/blogs", blogsRouter );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render("error");
});

module.exports = app;
