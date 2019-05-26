const express = require("express");
const router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(burger_data) {
    console.log(burger_data);
    res.render('index', {burger_data}); 
  }) 
})
router.put("/burgers/update/:id", function(req, res){
  console.log(req.params.id)
  burger.update(req.params.id, req.body, function(result){
    console.log(result)
    res.sendStatus(200);
  });
});

router.post("/burgers/create", function(req,res) {
  console.log(req.body)
 burger.create(req.body.burger_name, function(results){
   res.redirect("/");
 })
})



// Export routes for server.js to use.
module.exports = router;
