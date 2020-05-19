var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burger");
});

router.get("/burger", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  burger.all(function(burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    console.log('BURGER DATA', burgerData)
    res.render("index", { burger_data: burgerData });
  });
});
// post route -> back to index
router.post("/api/burgers", function(req, res) {

  // takes the request object using it as input for burger.addBurger
  burger.create(req.body.name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});
// put route -> back to index
router.put("/api/burgers/:id", function(req, res) {
  console.log('hellloo')
  burger.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});
module.exports = router;