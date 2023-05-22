require("custom-env").env(true)
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const redis = require("./utils/redis")
// const redis = require("./utils/redis")
const db = require("./models/index");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
// app.use('/users', usersRouter);

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
app.use(async(err,req,res,next)=>{
  let error = await err
  res.status(500).send({sucess:false,message:"internal server error"})
})
db.sequelize.authenticate().then(()=>{
  console.log(`DB synced......`);
}).catch((err)=>{
  console.log(`DB connection failed due to some ${err}.`);
})
module.exports = app;
