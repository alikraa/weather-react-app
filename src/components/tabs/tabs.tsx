import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { TabDetails } from './tab-details.tsx';
import { TabForecast } from './tab-forecast.tsx';
import { TabNow } from './tab-now.tsx';
import { VALUES } from '../../ts/consts.ts';
import { addCityToList } from '../../store/cities-slice.ts';
import { getData, setData } from '../../ts/view.ts';
import styles from './tabs.module.css';

function Tabs() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherNowDetails.data);
  const weatherForecast = useSelector((state) => state.weatherForecast.data);

  const iconLink = weatherData?.weather
    ? `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
    : null;

  const temperature = weatherData?.main
    ? `${Math.round(weatherData.main.temp)}${VALUES.DEGREE}`
    : null;

  const feelingTemp = weatherData?.main
    ? `${Math.round(weatherData.main.feels_like)}${VALUES.DEGREE}`
    : null;

  const sunriseTime = weatherData?.sys
    ? format(new Date(weatherData.sys.sunrise * 1000), 'HH:mm')
    : null;

  const sunsetTime = weatherData?.sys
    ? format(new Date(weatherData.sys.sunset * 1000), 'HH:mm')
    : null;

  const weatherName = weatherData?.weather ? weatherData.weather[0].main : null;

  const addToList = () => {
    dispatch(addCityToList(weatherData.name));
  };

  const setList = () => {
    const cities = getData(VALUES.CITIES_LIST) || VALUES.LIST;
    const checkCity = cities.find((city) => city === weatherData.name);
    if (!checkCity) {
      const citiesList = [...cities, weatherData.name];
      setData(VALUES.CITIES_LIST, citiesList);
    }
  };

  return (
    <div className={styles.tabs}>
      <TabNow
        cityName={weatherData?.name}
        cityTemperature={temperature}
        cityIcon={iconLink}
        addToList={addToList}
        setList={setList}
      />
      <TabDetails
        cityName={weatherData.name}
        cityTemperature={temperature}
        cityFeelingTemp={feelingTemp}
        cityWeatherName={weatherName}
        citySunrise={sunriseTime}
        citySunset={sunsetTime}
      />
      <TabForecast
        forecastData={weatherForecast}
        cityName={weatherData?.name}
      />
    </div>
  );
}

export { Tabs };
