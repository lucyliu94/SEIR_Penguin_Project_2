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
I ran into some issues with my carousel. I just needed to make sure my scripts were properly added to layout.liquid file.

I also read a lot of documentation on getting the carousel right. I realized I needed to add data-targets so we know which carousel item is being targeted. And that active is needed to show that is active/live.
```
<li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="5"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="6"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="7"></li>
```


I levereged bootstrap for the first time and it felt a bit difficult to digest all the documentation. I finally incorporated it with the carousel I added as well as display cards in my index route. 

I also ran into the hiccup where my styles were not all being picked up by the public styles css page. I ended up making individual CSS pages for each individual page. 

Lastly - the navbar was also quite challenging for me to do in bootstrap. I learned that you can add styles directly so that is what I tried to do below. 

```
<nav class="navbar navbar-expand-lg py-3 nav-custom" style="background-color: #98ACF8;">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link text-dark" href="/animals">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="/animals/new">Add New Animal</a>
      </li>
      <li><a href="/user/logout"><button class="btn btn-info btn-outline-dark">Logout</button></a></li>
    </ul>
  </nav>
  ```


