//Module dependencies
var express = require('express')
  , engine = require('ejs-locals')
  , path = require('path')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , bodyParser = require('body-parser');

//Declare app, express and io
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

//Routes
var routes = require('./routes/index')
  , car = require('./routes/car');

//App settings
app.set('port', process.env.PORT || 1337);
app.set('views', __dirname + '/views');

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/car', car);

//Start express server
http.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

function updateData()
{
	io.emit('update', '{"speed": 30, "rpm": 3000}');
	
	setTimeout(updateData, 300);
}

updateData();

//Listen for socket.io connections
io.on('connection', function(socket) {
	console.log('A user connected');
	
	socket.on('data', function(data) {
		io.emit('update', data);
	});
	
	socket.on('disconnect', function(){
	    console.log('User disconnected');
	});
});