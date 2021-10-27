//////////////////
//Import your dependencies
//////////////////

const mongoose = require("./connection")
const Animal = require("./animals")

/////////////
///Seed Code
/////////////

//save the conneciton in it as a variable 
const db = mongoose.connection

//make sure code doesn't run till connection is open
db.on("open", () => {
    const animalsArray = [
        {species: "dog", 
         name: "Gumaro",
         img:  "https://g.petango.com/photos/1686/d8fd9fef-943a-4f86-8521-19a14781b5f7.jpg",
         gender: "Male", 
         age: "3 Years 1 Month", 
         breed: "Mixed-Breed", 
         neuteredSpayed: true, 
         onHold: false },

        {species: "dog", 
         name: "Rosalia", 
         img: "https://g.petango.com/photos/1686/80ba691b-d79d-448a-be24-3f86c706b0cd.jpg",
         gender: "Female", 
         age: "1 Year 11 Months", 
         breed: "Catahoula Leopard Dog", 
         neuteredSpayed: true,
         onHold: false },

        {species: "dog", 
         name: "Joenie", 
         img: "https://g.petango.com/photos/1686/8d90f46a-76a7-4658-aa8a-ac17df30be42.jpg",
         gender: "Female", 
         age: "5 Years 7 Months", 
         breed: "Shephard", 
         neuteredSpayed: true, 
         onHold: false },

        {species: "dog", 
         name: "Josh", 
         img: "https://g.petango.com/photos/1686/7539624f-c9f2-4988-b783-d09894cff49f.jpg",
         gender: "Male", 
         age: "4 Years 8 Months",
         breed: "Retriever, Labrador Mix", 
         neuteredSpayed: true, 
         onHold: true },

        {species: "dog", 
         name: "Bruce", 
         img: "https://g.petango.com/photos/1686/e12c8f8a-21cf-4f2a-922b-c6ad5ecfd622.jpg",
         gender: "Male", 
         age: "2 Years 1 Month", 
         breed: "Spaniel", 
         neuteredSpayed: true,
         onHold: true },

        {species: "cat", 
         name: "Bobby", 
         img: "https://g.petango.com/photos/1686/63efaeeb-efea-4658-a290-c74bede91084.jpg",
         gender: "Male", 
         age: "3 Years 6 Months", 
         breed: "Domestic Shorthair",
         neuteredSpayed: true,
         onHold: false },

        {species: "cat", 
         name: "Mr. Meowgi",
         img: "https://g.petango.com/photos/1686/e8ed9de6-85e1-4779-b0d1-6601c7765043.jpg",
         gender: "Male", 
         age: "10 Years 4 Months",
         breed: "Domestic Shorthair",
         neuteredSpayed: true,
         onHold: false },

        {species: "cat", 
         name: "Pico", 
         img: "https://g.petango.com/photos/1686/48345008-946e-4dd0-999b-16a9f2331567.jpg",
         gender: "Female", 
         age: "7 Years 5 Months",
         breed: "Domestic Shorthair",
         neuteredSpayed: true, 
         onHold: true },

        {species: "cat",
         name: "Zephyr",
         img: "https://g.petango.com/photos/1686/80772344-2cbe-4bb5-bcac-7993b477c1ba.jpg",
         gender: "Male",
         age: "5 Months",
         breed: "Domestic Shorthair",
         neuteredSpayed: true,
         onHold: true },

        {species: "cat",
         name: "Malachy", 
         img: "https://g.petango.com/photos/1686/4504cfd9-139a-41b3-9cfa-4b3ee610959c.jpg",
         gender: "Male",
         age: "1 Year", 
         breed: "Domestic Shorthair",
         neuteredSpayed: true,
         onHold: false },
      ];



    // delete all fruits
   Animal.deleteMany({}).then((data) => {
        // seed the starter fruits
        Animal.create(animalsArray).then((data) => {
           console.log(data)
        })
    })
})