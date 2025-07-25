let API_KEY = "8d7c1bc6527e2cba2e63da66c6037fb6";
let input = document.querySelector("input");
let button = document.querySelector("button");
let weather = document.querySelector(".temp");
let city = document.querySelector(".city");

let weatherReport = async (cityName) => {
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  let response = await fetch(URL);
  let data = await response.json();
  return data;
};

button.addEventListener("click", async () => {
  let cityName = input.value.trim();
  if (cityName === "") return alert("Please enter a city name!");

  let data = await weatherReport(cityName);
  console.log("Fetching data...", data);
  updateWeather(data);
});

const updateWeather = (data) => {
  let kelvin = 273.15;
  let celcius = data.main.temp - kelvin;
  let roundedTemp = Math.round(celcius);

  weather.innerText = `${roundedTemp}°C`;
  city.innerText = data.name;
  document.querySelector(".humidity").innerText = data.main.humidity + "%";
  document.querySelector(".wind").innerText = data.wind.speed + "km/h";
};
