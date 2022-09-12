# mashup_app

### what is Mashup: 
Rest API call inside another api call is called mashup which used a lot for data anylysis and data science. 

### Tasks:

#### step 01: create a controller method which can take a user id as params from request and use API 1 to get 1 user data

#### step 02: if 1 user found then use his geo location longatude and latitude to find the weather data from API 2 and see the data

#### step 03: If successful, then based on weather type as "clear/clouds/rainy" etc. find a movie data using this as title and show the related movie

#### step 04: now install reactjs and use a search input for user id from client and display weather and movie as you like.

### Note: please get API keys by signup to related website and try this yourself to learn how to get API key for rest API data


### API 1(user data): https://jsonplaceholder.typicode.com/users/:anyid
website for detail: https://jsonplaceholder.typicode.com/

### API 2(weather data): https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}
website for detail:https://openweathermap.org/api

### API 3(Movie data): http://www.omdbapi.com/?t=${weatherType}&apikey=${apikey}
website for detail: https://www.omdbapi.com/
