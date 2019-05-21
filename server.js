var express=require("express")
var app=express()
var routes=require("./routes")
var bodyParser=require("body-parser")

var logger = require('morgan');
var cookieParser = require('cookie-parser');



app.all('/*', (req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  res.header(
    'Access-Control-Allow-Headers',
    'Content-type,Accept,Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});
app.use(logger('dev'));

app.use(cookieParser());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));

app.get("/",function(req,res){
	res.send("Welcome to travells Enrollment server")
})

console.log("Configuring API")
app.use("/api/students",routes.students);

app.use("/api/users",routes.users);
app.use("/api/mail", routes.mail);


app.listen(3001,function(){
	console.log("Travell Enrollment Server is started")
})
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
