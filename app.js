import axios from 'axios';
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

async function getWeather(event){
    event.preventDefault();
    const city = cityInput.value;
    const weatherBycity = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    console.log(weatherBycity)
    if(!city){
        alert("Enter a major city!")
        return;
    }
   await fetch(weatherBycity)
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

}
const favCities = []
let citiesId = ""
favIcon.addEventListener('click', favCity)
async function favCity() {
    const city = cityInput.value;

    favCities.push(city)


const options = {
  method: 'POST',
  url: 'https://json-storage-api.p.rapidapi.com/datalake',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'f930ce2bc4mshce1ac230f341dcep172ccdjsn3d707b1eb240',
    'X-RapidAPI-Host': 'json-storage-api.p.rapidapi.com'
  },
  data: {
    '@context': [
      'http://schema4i.org/Thing.jsonld',
      'http://schema4i.org/Action.jsonld',
      'http://schema4i.org/CreateAction.jsonld'
    ],
    '@type': 'CreateAction',
    Result: {
      '@context': [
        'http://schema4i.org/DataLakeItem.jsonld',
        'http://schema4i.org/UserAccount.jsonld',
        'http://schema4i.org/OfferForPurchase.jsonld',
        'http://schema4i.org/Offer.jsonld',
        'http://schema4i.org/Organization.jsonld',
        'http://schema4i.org/PostalAddress.jsonld'
      ],
      '@type': 'DataLakeItem',
      Name: 'Weather App',
        Creator: {
          '@type': 'UserAccount',
          Identifier: 'USERID-1111',
        },
        About: {
          '@type': 'Cities',
          Cities: favCities,
          
        },
    }
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
    citiesId = response.data.Object.Identifier
        // getFav(response.data.Object.Identifier);
} catch (error) {
	console.error(error);
}
}


// const id = '661f55a1bbc7bdba5b422e39';

async function getFav(id){

const options = {
    method: 'POST',
    url: 'https://json-storage-api.p.rapidapi.com/datalake',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'f930ce2bc4mshce1ac230f341dcep172ccdjsn3d707b1eb240',
      'X-RapidAPI-Host': 'json-storage-api.p.rapidapi.com'
    },
    data: {
      '@context': [
        'http://schema4i.org/Thing.jsonld',
        'http://schema4i.org/Action.jsonld',
        'http://schema4i.org/SearchAction.jsonld'
      ],
      '@type': 'SearchAction',
      Object: {
        '@context': [
          'http://schema4i.org/Thing.jsonld',
          'http://schema4i.org/Filter',
          'http://schema4i.org/DataLakeItem',
          'http://schema4i.org/UserAccount'
        ],
        '@type': 'Filter',
        FilterItem: {
          '@type': 'DataLakeItem',
          Identifier: id,
        //   Creator: {
        //     '@type': 'UserAccount',
            // Identifier: id

        //   },
        //   Name: 'Weather App',
        //   About: {
        //     '@type': 'Cities'
        //   }
        }
      }
    }
  };
  try {
	const response = await axios.request(options);
	console.log("Get fav", response.data);
} catch (error) {
	console.error(error);
}
  
}