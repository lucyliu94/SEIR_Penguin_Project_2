# Project 2
## by Lucy Liu

## Explanation of App

For my Unit 2 project, I am making an app that allows you to view, edit, add and delete available cats & dogs for fosters. 


## Technologies Used
- Liquid
- Mongo / Mongoose
- Express / Node
- CSS
- HTML
- Bootstrap


## Library/Techniques
- jQuery
- RESTful Routes
- CRUD
- Deployment with Heroku
- Authentication & Authorization (If I have MVP completed first)

## Breakdown of Models
My app will include two models: cat and dog. 

#### Model: Animals
- Species: String
- name: String
- gender: String
- Age: Number
- breed: [String]
- neutered/spayed: Boolean
- on-hold: Boolean

## Routing Table 

#### aNIMALS
| URL              | METHOD        | ACTION                                                      |
| ---------------- |-------------  | ----------------------------------------------------------- |
| /animals          | GET           | get all animals (index)                                        | 
| /animals/new        | GET           | display form to add new animal                               |
| /animals            | POST          | add a new animal to the data and redirects to index            |
| /animals/:id        | GET           | shows information about one animal                            |
| /animals/:id/edit   | GET           | edit form for one animal                                      |
| /animals/:id        | PUT           | updates a animal's data and redirects to that animal's show page  |
| /animals/:id        | DELETE        | delete a animals's data and redirects back to index             |


## User Stories

- User can visit /animals to see a list of all available animals for foster
- User can click on a picture of an animal to be taken to a show page that provides details about that animal
- User can click add button to add new animals that is available for foster onto the index page
- User can click the edit button to update any pet information 
- User can click a delete button on the show page to delete the item


## Challenges
#### TBD

## Conclusion
#### TBD