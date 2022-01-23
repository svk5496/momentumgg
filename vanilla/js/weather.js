const API_KEY = "9960e2ced43d49a1b31ac959e77570ff";
const weather_container = document.querySelector("#weather-container");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city_name = document.querySelector("#city_name");
      city_name.innerText = `@${data.name}`;
      const current_weather = document.querySelector("#current_weather");
      current_weather.innerText = `${data.weather[0].main} / ${data.main.temp}°`;
    }); //url 정보를 불러옴
}
function onGoError() {
  alert("Cant find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGoError);
