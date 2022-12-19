
// need to get openweather API and display 5 days frcast

let searchBtn = $("#search");
let cityEl = $("#city");
let stateEl = $("#state");
let latlong;
let cityLatLong = [];

let apiBase = "https://api.openweathermap.org/";
let apiKey = "83a44da7964246bbf900a3b2168f29ce";
let apiBaseWeather = apiBase + "data/2.5/forecast?";
let apiBaseLatLon = apiBase + "geo/1.0/direct?";

//get state and city informaiton

// resonse object
//let geocode;  
//let weather;

// from geocogin
 
// function getData(url) {
//   fetch(url)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function (data) {
//       geocode = data;
//     }).then(function(gJson)
// 	    latitude, longitude = getLatLon(gJson, city))}
// }
// 
function getLatLon(geoJson, state) {
  for (let i=0; i<geoJson.length; i++) {
    if (geoJson[i]["state"] == state) {
      return [geoJson[i]["lat"].toFixed(2)
	      ,geoJson[i]["lon"].toFixed(2)];
    }
  }
  return console.log("State not found");
}
    


function handlerGetData(event){
  event.preventDefault();
  if (localStorage.getItem("cityLatLong")) {
    cityLatLong = JSON.parse(localStorage.getItem("cityLatLong"));
  }
  
  let city = cityEl.val();
  let state = stateEl.val();
  console.log(city +", "+state);
  let apiLatLon = `${apiBaseLatLon}q=${city},${state}&limit=10&appid=${apiKey}`;
  console.log(apiLatLon);
   fetch(apiLatLon)
    .then(response => response.json())
    .then((data) =>{
      latlong = getLatLon(data,state);
      console.log("LAt long : " + latlong);
      cityLatLong.push([city+","+state, latlong]);
      localStorage.setItem("cityLatLong", JSON.stringify(cityLatLong));
      let apiWeather = `${apiBaseWeather}lat=${latlong[0]}&lon=${latlong[1]}&units=imperial&appid=${apiKey}`;
      console.log(apiWeather);
      fetch(apiWeather)
	.then(response => response.json())
	.then((data) => {
	  localStorage.setItem("weatherResponse", JSON.stringify(data["list"]));
	});
    })
    .then(() => { window.location.href = "./results.html";});
  return 0;
}


searchBtn[0].addEventListener('click', handlerGetData);
