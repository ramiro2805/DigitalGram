var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const posteosRouter = require('./routes/posteos');
const usuariosRouter = require('./routes/usuarios');

const db = require('./database/models')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const session = require('express-session')

app.use(session({ secret: "secreto",
  resave: false,
  saveUninitialized : true}))

  
app.use(function(req,res,next){
  if (req.session.user != undefined){
    res.locals.user = req.session.user
    return next()

  }
  return next()
})

app.use(function(req,res,next){
  if (req.cookies.userId != undefined && req.session.user== undefined) {
    let idUsuario = req.cookies.userId
    db.Usuario.findByPk(idUsuario)
    .then(function(user){
      req.session.user = user.dataValues
      res.locals.user=user.dataValues
      return next()
    })
    .catch(function(error){
      return next()
    })
  }

  return next();
})


app.use('/', indexRouter);
app.use("/posteos" , posteosRouter)
app.use("/usuarios" , usuariosRouter)


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
