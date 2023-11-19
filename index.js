function updateWeather(response) {
  let temp = document.querySelector("#value");
  let city = document.querySelector("#city");

  city.innerHTML = response.data.name;
  temp.innerHTML = Math.round(response.data.main.temp);
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = response.data.wind.speed;

  let now = new Date();
  let hours = now.getDate();
  let min = now.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let time = document.querySelector("#time");
  time.innerHTML = `${day} ${hours}:${min}`;

  let icon = document.querySelector("#icon");

  let url = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
  icon.innerHTML = `<img src="${url}"class="weather-app-icon"/>`;
}

function Search(city) {
  let apiKey = "1c47cb7de8db7253e5f709b37d433711";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function submit(event) {
  event.preventDefault();
  let input = document.querySelector("#form-input");

  Search(input.value);
}
let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", submit);
Search("Cairo");
