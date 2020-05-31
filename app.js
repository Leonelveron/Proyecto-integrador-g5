var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Route System

const indexRouter = require("./routes/index");
const carritoRouter = require("./routes/carrito");
const nuevoProductoRouter = require("./routes/nuevoProducto");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

app.use('/', indexRouter);
app.use('/carrito', carritoRouter);
app.use('/nuevoproducto', nuevoProductoRouter);
app.use('/registro', usersRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;