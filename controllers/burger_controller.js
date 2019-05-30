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

router.put("/api/burgers/:id", (req, res) => {
 var condition = "id = " + req.params.id;
 console.log("condition", condition);
 console.log(req.body)
  burger.update({devoured: req.body.devoured
  }, condition, (result) => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.post("/api/burgers", (req,res) => {
  console.log(req.body)
  burger.create([
   "name", "devoured"
  ], [
   req.body.burger_name, req.body.devoured
  ], (result) => {
      res.json({ id: result.insertId});

  });
   
 });


router.delete("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  burger.delete(condition, (result) => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});





// Export routes for server.js to use.
module.exports = router;
