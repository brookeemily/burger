// Require express
var express = require("express");

// create the 'router' for the application 
var router = express.Router();

// Import the burger model 
var burger = require("../models/burger.js");


// Create all of the routes required for the application

// Gets the data from the database
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
        });
    });

// post new info to database
router.post("/api/burgers", function(req,res) {
    burger.create([
        "burgerName", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
   });

   // update database
   router.put("/api/burgers/:id", function(req, res) {
       var condition = "id = " + req.params.id;

       console.log("condition", condition);

       burger.update({
           devoured: req.body.devoured
       }, condition, function(result) {
           if (result.changedRows == 0) {
               // if nothing was changed, id does not exist - error
               return res.status(404).end();
           } else {
               res.status(200).end();
           }
           });
       });

    // delete

    router.delete("/api/burgers/:id", function(req, res) {
        var condition = "id = " + req.params.id;

        burger.delete(condition, function(result) {
            if (result.affectedRows == 0) {
                 // if nothing was changed, id does not exist - error
                 return res.status(404).end();
                } else {
                    res.status(200).end();
                }
                });
            });
// export the `router` at the end of your file.
module.exports = router;
