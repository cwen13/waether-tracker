
// need to get openweather API and display 5 days frcast

let searchBtn = $("#search");
let cityEl = $("#city");
let stateEl = $("#state");

let apiBase = "https://api.openweathermap.org/";
let apiKey = "83a44da7964246bbf900a3b2168f29ce";
let apiBaseWeather = apiBase + "data/2.5/forcast?";
let apiBaseLatLon = apiBase + "geo/1.0/direct?";

//get state and city informaiton

// resonse object
//let geocode;  
//let weather;

// from geocogin
 
function getData(url) {
  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    });
}

function getLatLon(geoJson, state) {
  for (let i=0; i<geoJson.length; i++) {
    console.log(geoJson[i]["state"]);
    if (geoJson[i]["state"] == state) {
      console.log(geoJson[i]["state"]);
      return [geoJson[i]["lat"],geoJson[i]["lon"]];
    }
  }
  return "State not found";
}
    

function handlerGetData(event){
  event.preventDefault();
  let city = cityEl.val();
  let state = stateEl.val();
  console.log(city +", "+state);
  let apiLatLon = `${apiBaseLatLon}q=${city},${state}&limit=10&appid=${apiKey}`;
  console.log(apiLatLon);
  let geocode = getData(apiLatLon);
  
  var latitude, longitude = getLatLon(geocode,state);
  let apiWeather = `${apiBaseWeather}lat=${latitude}&lon=${longitude}&cnt=6&units=imperial&appid=${apiKey}`;
  console.log(apiWeather);
  let weather = getData(apiWeather);
  
  date = Date.parse(document.querySelector("#startDate").value);
  localStorage.setItem("weather", JSON.stringify(weather));
  return 0;
}


searchBtn[0].addEventListener('click', handlerGetData);
console.log("passed the function");
