class Weather {
  constructor(city, country) {
    this.apiKey = 'c84b32007539ea00ce91bd763ed72c65';
    this.city = city;
    this.country = country;

  }
  //fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;

  }

  //change location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}