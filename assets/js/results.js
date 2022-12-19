

let weatherData = JSON.parse(localStorage.getItem("weatherResponse"));
let weatherToday = JSON.parse(localStorage.getItem("weatherToday"));

function pullStats(weatherEntry) {
  let entry = {date:"",
	       icon:"",
	       temp:"",
	       wind:"",
	       humidity:""
	      };
  let date = new Date(weatherEntry["dt"]*1000);
  entry["date"] = date.getFullYear()
    +'/'+('0'+(date.getMonth()+1)).slice(-2)
    +'/'+('0'+date.getDate()).slice(-2);
  entry["icon"] = weatherEntry["weather"][0]["icon"];
  entry["temp"] = weatherEntry["main"]["temp"];
  // add in line to get direction in NWSE
  entry["wind"] = weatherEntry["wind"]["speed"];
  entry["humidity"] = weatherEntry["main"]["humidity"];

  return entry;
}
function buildToday (weatherNow) {
  // reach inot global to get weatherToday
  
  let date = $("#today .date").text("Now: "+weatherNow["weather"][0]["icon"]);
  let temp = $("#today .temp").text("Temperature: "+weatherNow["main"]["temp"]);
  let wind = $("#today .wind").text("wind speed: "+weatherNow["wind"]["speed"]);
  let humidity = $("#today .humidity").text("Humidity: "+weatherNow["main"]["humidity"]);
  return 0;
}


function buildForecast (weather) {
  // reach into gloaal for weeather variable
  let weekForcast = $(".week-forecast");
  let section = $("<section>");
  let date = $("<section>").text("DATE:");
  let icon = $("<section>");
  let temp = $("<section>");
  let wind = $("<section>");
  let humidity = $("<section>");

  date.text("Date: " + weather["date"]);
  icon.text("icon " +weather["icon"]);
  temp.text("Temperature: " +weather["temp"]);
  wind.text("Wind speed: " + weather["wind"]);
  humidity.text("Humidity: " +weather["humidity"]);

  section.attr("class","box");
  section.append(date);
  section.append(icon);
  section.append(temp);
  section.append(wind);
  section.append(humidity);
  weekForcast.append(section);
  return 0;
}


function main () {
  
  buildToday(weatherToday);
  for (let i=0;i<weatherData.length; i++) {
    let readingTime = (weatherData[i]["dt_txt"]).split(" ")[1];
    if (readingTime === "12:00:00"){
      buildForecast(pullStats(weatherData[i]));
    }
  }
}


main();


