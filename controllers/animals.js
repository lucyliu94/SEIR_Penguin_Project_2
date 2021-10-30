////////////////////////
// Import dependencies
////////////////////////
const express = require("express");
const Animal = require("../models/animals");


////////////////////////
// Create router
////////////////////////
const router = express.Router();


/////////////////////////////////
// Router Middleware
/////////////////////////////////

// middleware to check if user is logged in
router.use((req, res, next) => {
    if (req.session.loggedIn){
        // send to routes
        next()
    } else {
        res.redirect("/user/login")
    }
})


// Index route
router.get("/", (req, res)=>{
    Animal.find({username: req.session.username})
    .then((animals)=>{
        res.render("animals/index.liquid", {animals})
    })
    .catch((error) => {
        res.json({error})
    })
})

// New Route
router.get("/new", (req,res) =>{
    res.render("animals/new.liquid")
})

//Create Route
router.post("/", (req,res) =>{
    Animal.create(req.body)
    .then((animal)=>{
        res.redirect("/animals")
    })
    .catch((error) => {
        res.json({error})
    })
})

// Edit Route
router.get("/:id/edit", (req,res) =>{
    const id = req.params.id
    Animal.findById(id)
    .then((animal) => {
        res.render("animals/edit.liquid", { animal })
     })
     .catch((error) => {
        res.json({error})
    })
})


// Update Route

router.put("/:id", (req, res) => {
    const id = req.params.id
    
    // update the item with the matching id
    Animal.findByIdAndUpdate(id, req.body, {new: true})
    .then((animal) => {
        res.redirect("/animals")
    })
     .catch((error) => {
        res.json({error})
    })
})

// Delete Route

router.delete("/:id", (req,res) => {
    const id = req.params.id
    Animal.findByIdAndDelete(id)
    .then((animal)=> {
        res.redirect("/animals")
    })
    .catch((error) => {
        res.json({error})
    })
})

// Show Route
router.get("/:id",(req, res) => {
    const id = req.params.id
    Animal.findById(id)
    .then((animal) => {
        res.render("animals/show.liquid", {animal})
    })
    .catch((error) => {
        res.json({error})
    })
})





//////
//Export the router
//////

module.exports = router