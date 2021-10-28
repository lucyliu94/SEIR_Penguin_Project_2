////////////////////////
// Import dependencies
////////////////////////
const mongoose = require("./connection")

////////////////////////
// Create products model
////////////////////////
const {Schema, model} = mongoose

const animalSchema = new Schema({
    species: String,
    name: String,
    img: String,
    gender: String,
    age: String,
    breed: [String],
    neuteredSpayed: Boolean,
    onHold: Boolean,
})

const Animal = model("Animal", animalSchema)

////////////////////////
// Export the model
////////////////////////
module.exports = Animal
