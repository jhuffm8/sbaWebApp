const apiKey ='85db9f63a96a4c34a8b202116241504';
const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city');
const tempDiv = document.getElementById('temp-div');
const weatherInfo = document.getElementById('weather-info');
const weatherIcon = document.getElementById('weather-icon');

form.addEventListener('submit', getWeather)

async function getWeather(event) {
    event.preventDefault()
    const city = cityInput.value;
    if(city === ""){
        alert("Need to enter location");
        return
    } else{
    const response = await fetch(` http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    const data = await response.json()
    const iconUrl = data.current.condition.icon;
    const description = data.current.condition.text;

    // weatherData.innerHTML = `<h2>${data.location.name}</h2>
    // <p>Local Time: ${data.location.localtime}</p>
    // <p>Tempature in Fahrenheit: ${data.current.temp_f}</p>
    // <p>Tempature in Celsius: ${data.current.temp_c}</p>
    // <p>Condition: ${data.current.condition.text}</p>
    // `
    tempDiv.innerHTML = `<p>${data.current.temp_f}</p>`
    weatherInfo.innerHTML = `<p>${data.current.condition.text}</p>`
    weatherIcon.src = `https:${iconUrl}`;
    showImage();





    console.log(data)
    // console.log(iconUrl)
    }
}
// getWeather();

function showImage(){
    weatherIcon.style.display = 'block'
}