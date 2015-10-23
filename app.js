
/**
 * Module dependencies.
 */

var express = require('express')
  , passport = require('passport')
  , engine = require('ejs-locals')
  , path = require('path')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , bodyParser = require('body-parser');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var routes = require('./routes/index')
  , user = require('./routes/user');

//All environments
app.set('port', process.env.PORT || 1337);
app.set('views', __dirname + '/views');

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', user);

http.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

io.on('connection', function(socket) {
	console.log('A user connected');
	
	socket.on('data', function(data) {
		io.emit('update', data);
	});
	
	socket.on('disconnect', function(){
	    console.log('User disconnected');
	});
});