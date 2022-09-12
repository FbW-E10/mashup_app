exports.getMovieByUserIdAndWeather = (req, res)=>{
    const userId = req.params.userId
    fetch('https://jsonplaceholder.typicode.com/users/'+userId)
        .then(response => response.json())
        .then(users => {
        // get weather data from lat and long coordinate
          //res.json(users)
          // get weather data based on long and lat
          const apiLink2 = `https://api.openweathermap.org/data/2.5/weather?lat=${users.address.geo.lat}&lon=${users.address.geo.lng}&appid=${process.env.API_KEY_W}`

          fetch(apiLink2)
          .then(response => response.json())
          .then(weatherData=>{
            const weatherType = weatherData.weather[0].main
            fetch(`http://www.omdbapi.com/?t=${weatherType}&apikey=${process.env.API_KEY_M}`)
            .then(response => response.json())
            .then(movie=>{
                res.json(movie)
            })
          })
        })
}