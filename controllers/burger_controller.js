const express = require("express");
const router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(burger_data) {
    console.log(burger_data);
    res.render("index"); 
  })

  
})


// Export routes for server.js to use.
module.exports = router;
