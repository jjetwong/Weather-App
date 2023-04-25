let weather = {
    //apikey = 9bffcf75e8cc4f7f42dad70168988020
    fetchWeather: function (city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=9bffcf75e8cc4f7f42dad70168988020"
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        //Get data from the json displayed from this link https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=9bffcf75e8cc4f7f42dad70168988020
        
        const {name} = data;
        const {id , main , description , icon } = data.weather[0];
        const {temp , humidity , feels_like } = data.main;
        const {speed} = data.wind;
        const {country} = data.sys;

//Weather Icons

        if (icon == "02d" ){ //Partly Cloudy Day
            document.querySelector(".icon").src = "https://img.icons8.com/stickers/100/null/partly-cloudy-day.png";
        }
        if (icon == "03d" ){ //Partly Cloudy Day
            document.querySelector(".icon").src = "https://img.icons8.com/stickers/100/null/partly-cloudy-day.png";
        }
        if (icon == "02n" ){ //Partly Cloudy Night
            document.querySelector(".icon").src = "https://img.icons8.com/stickers/100/null/partly-cloudy-night.png";
        }
        if (icon == "03n" ){ //Partly Cloudy Night
            document.querySelector(".icon").src = "https://img.icons8.com/stickers/100/null/partly-cloudy-night.png";
        }
        if (id == "803" ){ //Cloudy
            document.querySelector(".icon").src = "https://img.icons8.com/stickers/100/null/clouds.png";
        }
        if (id == "804" ){ //Cloudy
            document.querySelector(".icon").src = "https://img.icons8.com/stickers/100/null/clouds.png";
        }
        if (icon == "01d"){ //Clear day
            document.querySelector(".icon").src = "https://img.icons8.com/stickers/100/null/sun.png";
        }
        if (icon == "01n"){ //Clear night
            document.querySelector(".icon").src = "https://img.icons8.com/stickers/100/null/bright-moon.png";
        }
        if (id == "511"){ //Freezing Rain
            document.querySelector(".icon").src = "https://img.icons8.com/stickers/100/null/sleet.png";
        }
        if (main == "Thunderstorm"){
            document.querySelector(".icon").src = "https://img.icons8.com/stickers/100/null/storm.png";
        }
        if (main == "Snow"){
            document.querySelector(".icon").src = "https://img.icons8.com/stickers/100/null/snow.png";
        }
        if (main == "Drizzle"){
            document.querySelector(".icon").src = "https://img.icons8.com/stickers/100/null/rain.png";
        }
        if (main == "Rain"){
            document.querySelector(".icon").src = "https://img.icons8.com/stickers/100/null/rainy-weather.png";
        }
        if (main == "Tornado"){
            document.querySelector(".icon").src = "https://img.icons8.com/stickers/100/null/tornado.png";
        }
        if (icon == "50d"){
            document.querySelector(".icon").src = "https://img.icons8.com/stickers/100/null/haze.png";
        }

        //for testing console.log(name,icon,description,temp);

        document.querySelector(".city").innerText = "Weather in " + name + ", " + country;
        document.querySelector(".temp").innerText = Math.round(temp) +"°C";
        //document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText ="Feels Like " + Math.round(feels_like) +"°C. " + description.charAt(0).toUpperCase() + description.slice(1) + ".";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/s";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".searchBar").value);
    }
}

document.querySelector(".searchButton").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".searchBar").addEventListener("keyup", function (event) {
    if(event.key == "Enter") {
        weather.search();
    }
});