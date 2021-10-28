////////////////////////
// Import dependencies
////////////////////////
const express = require("express");
const Animal = require("../models/animals");


////////////////////////
// Create router
////////////////////////
const router = express.Router();


// Index route
router.get("/", (req, res)=>{
    Animal.find({})
    .then((animals)=>{
        res.render("animals/index.liquid", {animals})
    })
    .catch((error) => {
        res.json({error})
    })
})





//////
//Export the router
//////

module.exports = router