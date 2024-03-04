function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let apiCity = searchInput.value;
  let apiKey = "44b4d9f5e3a3baf490c33c5519ot4f0a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${apiCity}&key=${apiKey}`;
  axios.get(apiUrl).then(displayTemperature);
}

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
searchCity.addEventListener("submit", search);

let date = document.querySelector("#current-date");
let hourDay = new Date();
date.innerHTML = formatDate(hourDay);
