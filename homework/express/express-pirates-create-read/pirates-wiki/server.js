const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());

const pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);


app.get('/', function(req, res) { 

});

const port = process.env.PORT || 3000; 

app.listen(port, function() {

  console.log('listening on port ' + port);
}); 