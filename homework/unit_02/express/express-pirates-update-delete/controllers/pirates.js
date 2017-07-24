//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates.seededPirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirates: showPirate
	});
});

// CREATE
//==============================

router.get('/:id/edit', (req, res) => {
	const id = req.params.id;
	const pirates = pirates.seededPirates[id];
	res.render("pirates/edit", {
		pirates: pirates, 
		id: id
	})
});

router.put('/:id', (req, res) => {
	const id = req.params.id;
	const pirates = names.seededPirates[id];
	pirates.description = req.body.description;
	pirates.urgent = req.body.urgent;
	res.method = "GET";
	res.redirect('/pirates/${id}');
});

router.delete('/:id', (req,res) => {
  names.seededPirates.splice(req.params.id, 1);
  res.method= "GET";
  res.redirect("/pirates");
});
//==============================
// EXPORTS
//==============================

module.exports = router;
