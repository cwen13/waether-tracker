
// need to get openweather API and display 5 days frcast

let apiBase = "https://api.openweathermap.org/";
let apiKey = "5c2a2987fec28f8b0fbf04e63251cfb2";
let apiBaseWeather = apiBase + "forcast/2.5/daily?";
let apiBaseLatLon = apiBase + "geo/1.0/direct?";

let city = "";
let state = "";
let country = "US"
//let latitude= "";
//let longitude= "";

//get state and city informaiton

// resonse object
//let geocode = {} 
//let weather={}

// from geocogin
let apiLatLon = `${apiBaseLatLon}q=${city},${state},${country}&appid=${apiKey}`;
let geocode = getData(apiLatLon);

//let latitude = geocode[0]{"lat"};
//let longitude = geocode[0]{"lon"};


let apiWeather = `${apiBaseWeather}lat=${latitude}&lon=${longitude}&cnt=6&units=imperial&appid=${apiKey}`;

let weather = getData(apiWeather);
 
localStorage.setItem("weather", JSON.stringify(weather));

function getData(url) {
  return fetch(apiWeather)
    .then(function(response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    });
}

let handlerGetData = (event) => {
  city = document.querySelector("#city").value;
  state = document/querySelector("#state").value;
  date = Date.parse(document.querySelector("#statDate").value);

  return 0;
}
