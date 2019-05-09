const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');


const app = express();

app.set('port', 1337 || process.env.PORT);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../src')));
// probably wouldnt want to limit cors to the client app since one requirement was to be able to hit this using cURL
app.use(cors());
// routes dependency dont seem to be working 
const router = require("./router")(app);i
// GET seems to be the only working route, and only seems to fetch and return the Angular app html
app.get('*', (req, res, next) => {
	res.sendFile(express.static(path.join(__dirname, '../src/index.html')));
});



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
  res.status(err.status || 500).json({ data: 'error' });
});

app.listen(app.get('port'), () => {
	console.log(`Listening on port ${app.get('port')}`);
});

module.exports = app;
