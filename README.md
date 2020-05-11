# yes-were-open
### Overview
Yes, we're open is a web app that will allow small resturants and business owners advertise to the public that they are open for business during this trying time.


### Wireframes


Mobile Sign Up Page
![](https://imgur.com/gXtuG7y.png)

Mobile Log In Page
![](https://imgur.com/ygB63mk.png)


Mobile Create Item Page
![](https://imgur.com/0mS0RwH.png)


Desktop Landing Page
![](https://i.imgur.com/GiNoRHY.png)


Desktop Log In Page
![](https://imgur.com/hIJCGxA)


Desktop Edit Item Page
![](https://i.imgur.com/w6F1ztX.png)

Model
![](https://i.imgur.com/GfuxKl2.png)

### MVP Goals

The homepage will have will have sign up and login prompts to allow users to create and secure personal accounts. For users without a sign in, the homepage will show a cumulative list panel of all the registered resturants.
The item page will display a particular resturant that had been added to the master list as well as allow the user to update current information.
The app will utilize React, JS, Ruby, CSS, and mongoDB. React, Ruby, and JS will render data stored on our development api created with mongoDB. The site would be hosted on Surge.

### Libraries

|     Library      | Description                      |
| :--------------: | :------------------------------- |
|      axios       | _To make get requests to API_    |
|   body-parser    | _Body parsing middleware_        |
|       cors       | _CORS enabling middleware_       |
|     express      | _Web framework for node_         |
|  framer-motion   | _Page transitions_               |
|       jest       | _JavaScript testing_             |
|     mongoose     | _MongoDB object modeling tool_   |
|      morgan      | _HTTP request logger middleware_ |
|     nodemon      | _Auto restart app on save_       |
| react-router-dom | _Link and Route components_      |

### Component Hierarchy

```structure

root
|__ client/
      |__ public/
            |__ index.html
      |__ src/
      |__ components/
            |__ shared/
                  |__ Header.js
                  |__ Footer.js
            |__ Home.js
            |__ ItemCreate.js
            |__ ItemDetail.js
            |__ ItemEdit.js
            |__ masterList.js
            |__ SignIn.js
            |__ SignUp.js
            |__ services/
                  |__ apiConfig.js
                  |__ items.js
                  |__ app.js
                  |__ index.js
            |__ README.md
            |__ package-lock.json
            |__ package.json
|__ controllers/
      |__ 
      |__ application_controller.rb
      |__ authentication_controller.rb
      |__ users_controller.rb
      |__ resturants_controller.rb
|__ db/
      |__ migrate
      |__ schema
      |__ seeds
|__ models/
      |__ user.rb
      |__ resturants.rb
|__ routes/
      |__ routes.rb
|__ tests/
      |__ base.test.js
      |__ routes.test.js
|__ .gitignore
|__ app.js
|__ info.yml
|__ package-lock.json
|__ package.json
|__ README.md
|__ server.js

```

### Post-MVP

**Yes, We're Open** 
Post-MVP allows the user to distinguish between carry-out and delivery. 
Will allow users not affiliated with a resturant create an account and save their favorites.