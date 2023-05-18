const VALUES = {
  DEGREE: '°',
  TEMPERATURE: 'Temperature',
  FEELING: 'Feels like',
  WEATHER: 'Weather',
  SUNRISE: 'Sunrise',
  SUNSET: 'Sunset',
  FORECAST: [0, 1, 2, 3],
  CITIES_LIST: 'citiesList',
  CURRENT_CITY: 'currentCity',
  LIST: [],
  DUPLICATE_CITY: 'Такой город уже есть в вашем списке!',
  CHECK_CITY: 'Проверьте написание города!',
};

const SERVER = {
  SERVER_URL: 'http://api.openweathermap.org/data/2.5/weather',
  FORECAST: 'http://api.openweathermap.org/data/2.5/forecast',
  API_KEY: '3a93792a7ff7223513e2ff98278e394d',
};

export { VALUES, SERVER };
