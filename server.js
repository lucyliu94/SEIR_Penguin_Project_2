////////////////////////
// Import dependencies
////////////////////////
const express = require("express")
const path = require("path")
require("dotenv").config()
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const AnimalRouter = require("./controllers/animals")


const viewsFolder = path.resolve(__dirname, "views/")

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
