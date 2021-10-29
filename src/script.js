function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayWeather(response) {
  console.log(response.data);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
  let temperatureToday = document.querySelector("#temperatureToday");
  temperatureToday.innerHTML = Math.round(response.data.main.temp);
  let humidityToday = document.querySelector("#humidityToday");
  humidityToday.innerHTML = response.data.main.humidity;
  let windToday = document.querySelector("#windToday");
  windToday.innerHTML = Math.round(response.data.wind.speed);
  let descriptionToday = document.querySelector("#descriptionToday");
  descriptionToday.innerHTML = response.data.weather[0].description;
  let dateToday = document.querySelector("#dateToday");
  dateToday.innerHTML = formatDate(response.data.dt * 1000);
  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(city) {
  let apiKey = "f81614abe2395d5dfecd45b9298041de";
  let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(urlApi).then(displayWeather);
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#text-city");
  search(city.value);
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", searchCity);
