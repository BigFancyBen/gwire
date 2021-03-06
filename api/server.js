// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var path        = require('path');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var User   = require('./app/models/user'); // get our mongoose model


// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));


app.use('/api', require('./routes'));

// basic route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/main.html'));
});
// app.get('/setup', function(req, res) {
//
//   // create a sample user
//   var nick = new User({
//     username: 'admin',
//     password: 'password',
//     admin: true
//   });
//
//   // save the sample user
//   nick.save(function(err) {
//     if (err) throw err;
//
//     console.log('User saved successfully');
//     res.json({ success: true });
//   });
// });

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Live at http://localhost:' + port);
