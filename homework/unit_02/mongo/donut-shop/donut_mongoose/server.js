//======================
// REQUIREMENTS
//======================
// require express, mongoose, body-parser, method-override
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var hbs = require("hbs");
var logger = require('morgan');


//======================
// MIDDLEWARE
//======================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.set("view engine", "hbs");
app.set('views', './views');

app.use(express.static(__dirname + 'public'));
app.use( logger('dev'));

//======================
// CONTROLLERS
//======================
//for seed file, seed the database
//var seedController = require('./controllers/seeds.js');
//app.use('/seed', seedController);

//for root directory, show all donuts
//var donutsController = require('./controllers/donuts.js');
//app.use('/', donutsController);

//======================
// LISTENERS

app.set('port', process.env.PORT || 3000);

//======================
//CONNECT MONGOOSE TO "donut_store"
var mongoDB = 'mongodb://127.0.0.1/donut_store'; 
mongoose.connect(mongoDB);  

//CREATE THE MONGOOSE CONNECTION and SET APP TO LISTEN to 3000
//Get the default connection 
var db = mongoose.connection;  
//Bind connection to error event (to get notification of connection errors) 
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(app.get('port'));