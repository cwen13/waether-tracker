
// need to get openweather API and display 5 days frcast

let searchBtn = $("search");
let cityEl = $("city");
let stateEl = $("state");

let apiBase = "https://api.openweathermap.org/";
let apiKey = "83a44da7964246bbf900a3b2168f29ce";
let apiBaseWeather = apiBase + "data/2.5/forcast?";
let apiBaseLatLon = apiBase + "geo/1.0/direct?";

let city = "";
let state = "";

//get state and city informaiton

// resonse object
//let geocode;  
//let weather;

// from geocogin
let apiLatLon = `${apiBaseLatLon}q=${city},${state}&limit=1&appid=${apiKey}`;
let geocode = getData(apiLatLon);
console.log("Hello" + geocode);
let latitude = geocode[0]["lat"];
let longitude = geocode[0]["lon"];



let apiWeather = `${apiBaseWeather}lat=${latitude}&lon=${longitude}&cnt=6&units=imperial&appid=${apiKey}`;

let weather = getData(apiWeather);
 
localStorage.setItem("weather", JSON.stringify(weather));

function getData(url) {
  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    });
}

function handlerGetData(event){
  event.preventDefault();
  console.log("In the function");
  city = cityEl.val();
  state = stateEl.val();
  date = Date.parse(document.querySelector("#startDate").value);
  return 0;
}


let searchLocation = document.querySelector("#search");
searchLocation.addEventListener('click', handlerGetData);
console.log("passed the function");
