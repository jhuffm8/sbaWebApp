const apiKey ='85db9f63a96a4c34a8b202116241504';
const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city');
const tempDiv = document.getElementById('temp-div');
const weatherInfo = document.getElementById('weather-info');
const weatherIcon = document.getElementById('weather-icon');
const nameCity = document.getElementById('city-name');
const favIcon = document.getElementById('fav')

form.addEventListener('submit', getWeather)

function showImage(){
    weatherIcon.style.display = 'block'
    favIcon.style.display = 'inline'

}

function getWeather(event){
    event.preventDefault();
    const city = cityInput.value;
    const weatherBycity = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    if(!city){
        alert("Enter a major city!")
        return;
    }
    fetch(weatherBycity)
        .then(response => response.json())
        .then(data => {
            displayWeather(data)
            console.log(data)
        })
        .catch(error => {
            console.log("Eroor:" , error);
            alert("Error! Please try again!")
        })

        showImage();    

}

function displayWeather(data){
    const temp = Math.round(data.current.temp_f);
    const iconUrl =  data.current.condition.icon;
    const description = data.current.condition.text;
    const cityName = data.location.name

    weatherIcon.src = `https:${iconUrl}`;
    weatherInfo.innerHTML = `<p>${description}</p>`;
    tempDiv.innerHTML = `<p>${temp}°F</p>`;
    nameCity.innerHTML = `<p>${cityName}</p>`
    // showImage();
}

