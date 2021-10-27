////////////////////////
// Import dependencies
////////////////////////
const express = require("express")
const path = require("path") // helper functions for file paths
require("dotenv").config()
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const AnimalRouter = require("./controllers/products")

// construct an absolute path to our views folder 
const viewsFolder = path.resolve(__dirname, "views/")

// create an app object with liquid, passing the path to the views folder
const app = require("liquid-express-views")(express(), {root: viewsFolder})

////////////////////////
// Middleware
////////////////////////
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

////////////////////////
// Routes
////////////////////////
// Register product router
app.use("/animals", AnimalRouter)

////////////////////////
// Listener
////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
}) 
