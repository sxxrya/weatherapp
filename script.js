const apiKey = "7eb7cdae946a9cd8a1049b957dec433e";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");
const button = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-icon");
const errorMessage = document.querySelector(".error-message")

async function findWeather(city){
    const result = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(result.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{

        var data = await result.json()

    document.querySelector(".city-name").textContent = data.name;
    document.querySelector(".temperature").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + " Km/hr";


    if(data.weather[0].main == "Clouds"){
        weatherImage.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherImage.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherImage.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherImage.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherImage.src = "images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"
    }

    

}

searchBtn.addEventListener("click", function(){
    findWeather(search.value);
})
button.addEventListener("click", function(){
    findWeather(search.value);
})



