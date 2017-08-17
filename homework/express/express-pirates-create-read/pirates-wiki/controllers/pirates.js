var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

router.get('/', (req,res) => {
    res.render('pirates/index'),
});

router.get('/new', (req,res) => {
    res.render('pirates/new');
})

router.get('/:id', (req,res) => {
    const id = req.params.id;
    
});



router.post('/', (req,res) => {
    const newPirates = {
    description: req.body.description,
    urgent: req.body.urgent
};
data.new.push(newTodo);
  res.redirect("/index");
});


module.exports = router;