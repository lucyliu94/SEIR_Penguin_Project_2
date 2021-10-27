////////////////////////
// Import dependencies
////////////////////////
const mongoose = require("./connection")

////////////////////////
// Create products model
////////////////////////
const {Schema, model} = mongoose

const animalSchema = new Schema({
    name: String,
    gender: String,
    Age: Number,
    breed: [String],
    neuteredSpayed: Boolean,
    onHold: Boolean,
})

const Animal = model("Animal", animalSchema)

////////////////////////
// Export the model
////////////////////////
module.exports = Animal