let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}

let days = [
  "sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayNumber = now.getDay();
let currentDay = days[dayNumber];
let dateToday = document.querySelector("#date-time");

dateToday.innerHTML = `${currentDay} ${hours}:${minutes}`;

let formOne = document.querySelector("#enter-city");

let apiKey = "f18o339a0b4b86f5a773b5031a4d08t4";
function displayWeather(response) {
  let cityOutput = document.querySelector("#city-name-output");
  let temperatureElement = document.querySelector("#current-temperature");
  cityOutput.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}
function fetchWeather(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeather);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-name-input");
  let userTypedCity = cityInput.value.trim();

  if (userTypedCity) {
    fetchWeather(userTypedCity);
  }
}
formOne.addEventListener("submit", handleSearchSubmit);
fetchWeather("Gilbert");
