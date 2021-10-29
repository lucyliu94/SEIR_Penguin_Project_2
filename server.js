////////////////////////
// Import dependencies
////////////////////////
const express = require("express")
const path = require("path")
require("dotenv").config()
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const AnimalRouter = require("./controllers/animals")
const UserRouter = require("./controllers/user")
const session = require("express-session")
const MongoStore = require("connect-mongo") 


const viewsFolder = path.resolve(__dirname, "views/")

const app = require("liquid-express-views")(express(), {root: viewsFolder})

////////////////////////
// Middleware
////////////////////////
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    resave: false
}))
////////////////////////
// Routes
////////////////////////

app.get("/", (req, res) => {
    res.render("index.liquid")
})

// Register product router
app.use("/animals", AnimalRouter)

// Register User Router
app.use("/user", UserRouter)

////////////////////////
// Listener
////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
}) 
