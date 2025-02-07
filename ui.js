class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
    this.humidity = document.getElementById('w-humidity')
  };



  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = Math.floor(weather.main.temp) + ' °C';
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels like: ${Math.floor(weather.main.feels_like)} °C`;
    this.dewpoint.textContent = `DewPoint: ${weather.wind.deg} degrees`;
    this.wind.textContent = `Wind: ${weather.wind.speed} meter/sec`;
  };


}

