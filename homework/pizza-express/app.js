// app.js

//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;

var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');


app.get('/', function (require, response) {
    response.render("Welcome to Pizza Express!");
});

app.get('/topping/:type', function(require, response, next) {
    response.render("pepperoni pizza! Good choice.");
});

app.get('/order/:amount/:size', function(require, response, next) {
     response.render("Your order for 10 medium pizzas will be ready in 1 minute!");
 });

app.get("/test/:someValue", function(req, res, next){ 
    res.render("index.hbs", { 
        message: req.params.someValue }); 
});



// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});