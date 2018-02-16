var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Route includes
var homeRouter = require('./routes/home.router');

var port = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
app.use(express.static('./server/public'));

// Routes
app.use('/home', homeRouter);

// Catch all bucket, must be last!
app.use('/', homeRouter);

// Listen //
app.listen(port, function(){
   console.log('Listening on port:', port);
});