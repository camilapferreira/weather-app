// City name update
function searchCityWeather(event) {
  event.preventDefault();
  let cityInput = document.querySelector("form .search-input");
  let cityName = cityInput.value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityName;
  apiCity = cityName;
  fetchData();
}

//Updating with API response
function displayTemperature(response) {
  let temperatureElement = document.querySelector("#api-temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  console.log(response.data.city);
}

function fetchData() {
  let apiKey = "44b4d9f5e3a3baf490c33c5519ot4f0a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${apiCity}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}

let apiCity = "paris";
// Date and Time

function formatDate(date) {
  let dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayWeek[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }
  return `${day} ${hour}:${minutes}`;
}

let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", searchCityWeather);

let date = document.querySelector("#current-date");
let hourDay = new Date();
date.innerHTML = formatDate(hourDay);
