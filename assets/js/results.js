
let forcastEl = $(".weekforcast");

let weather = {date: "0923",
	       icon: "$",
	       temp: "34.4",
	       wind: "23",
	       humidity: "34%"
	      }

function buildEntry (weather) {
  let weekForcast = $(".week-forcast");
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
  console.log(section);
  weekForcast.append(section);
  
}

buildEntry(weather);
