var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var app = express();
var db = require("./db/models");


const indexRouter = require("./routes/index");
const carritoRouter = require("./routes/carrito");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const recordameMiddleware = require('./middlewares/recordameMiddleware');
const apiUsersRouter = require('./api/routes/users');
const apiProductsRouter = require('./api/routes/products');
const carritoMW = require('./middlewares/carritoMiddleware');


// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({secret: 'Esto es un secreto'}));
app.use(recordameMiddleware);
app.use(function(req, res, next) {
  res.locals.user = req.session.loggedUser;
  next();
});

app.use((req, res, next) => {res.header('Access-Control-Allow-Origin', '*');
 next();})

app.use(function(req, res, next) {
  db.Brands.findAll().then(function(brands){
    res.locals.marcas = brands
    next();
  })
})

app.use(carritoMW)
// Route System

app.use('/', indexRouter);
app.use('/carrito', carritoRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/api/users', apiUsersRouter);
app.use('/api/products', apiProductsRouter);


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
