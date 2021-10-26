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

#### Model: Cat
- name: String
- gender: String
- Age: Number
- breed: [String]
- neutered/spayed: Boolean
- on-hold: Boolean

#### Model: Dog
- name: String
- gender: String
- Age: Number
- breed: [String]
- neutered/spayed: Boolean
- on-hold: Boolean


## Routing Table 

#### CATS
| URL              | METHOD        | ACTION                                                      |
| ---------------- |-------------  | ----------------------------------------------------------- |
| /cats            | GET           | get all cats (index)                                        | 
| /cats/new        | GET           | display form to add new cat                                 |
| /cats            | POST          | add a new cat to the data and redirects to index            |
| /cats/:id        | GET           | shows information about one cat                             |
| /cats/:id/edit   | GET           | edit form for one cat                                       |
| /cats/:id        | PUT           | updates a cat's data and redirects to that cat's show page  |
| /cats/:id        | DELETE        | delete a cat's data and redirects back to index             |

#### DOGS
| URL              | METHOD        | ACTION                                                     |
| ---------------- |-------------  | ---------------------------------------------------------- |
| /dogs            | GET           | get all dogs (index)                                       | 
| /dogs/new        | GET           | display form to add new dog                                |
| /dogs            | POST          | add a new dog to the data and redirects to index           |
| /dogs/:id        | GET           | shows information about one dog                            |
| /dogs/:id/edit   | GET           | edit form for one dog                                      |
| /dogs/:id        | PUT           | updates a dog's data and redirects to that dog's show page |
| /dogs/:id        | DELETE        | delete a dog's data and redirects back to index            |


## User Stories

- User can visit /cats or /dogs to see a list of all the cats or dogs available for foster
- User can click on a picture of an animal to be taken to a show page that provides details about that animal
- User can click add button to add new animals that is available for foster onto the index page
- User can click the edit button to update any pet information 
- User can click a delete button on the show page to delete the item


## Challenges
#### TBD

## Conclusion
#### TBD