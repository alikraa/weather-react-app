import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { TabDetails } from './tab-details.tsx';
import { TabForecast } from './tab-forecast.tsx';
import { TabNow } from './tab-now.tsx';
import { State } from '../../ts/interfaces.ts';
import {
  addCityToList,
  removeCityFromList,
  switchButton,
} from '../../store/cities-slice.ts';
import { VALUES } from '../../ts/consts.ts';
import { getData, setData } from '../../ts/view.ts';
import styles from './tabs.module.css';

function Tabs() {
  const dispatch = useDispatch();
  const weatherData = useSelector(
    (state: State) => state.weatherNowDetails.data,
  );
  const weatherForecast = useSelector(
    (state: State) => state.weatherForecast.data,
  );
  const citiesList = useSelector((state: State) => state.cities.citiesList);

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
    if (citiesList.includes(weatherData.name)) {
      dispatch(removeCityFromList(weatherData.name));
      dispatch(switchButton(false));
    } else {
      dispatch(addCityToList(weatherData.name));
      dispatch(switchButton(true));
    }
  };

  const setList = () => {
    const cities = getData(VALUES.CITIES_LIST) || VALUES.LIST;
    const checkCity = cities.find((city: string) => city === weatherData.name);
    if (!checkCity) {
      const setCitiesList = [...cities, weatherData.name];
      setData(VALUES.CITIES_LIST, setCitiesList);
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
