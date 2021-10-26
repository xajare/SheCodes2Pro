function displayWeather(response) {
  alert("done");
}
let apiKey = "f81614abe2395d5dfecd45b9298041de";
let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=Gorizia&appid=${apiKey}&units=metric`;

console.log(urlApi);

axios.get(apiUrl).then(displayWeather);
