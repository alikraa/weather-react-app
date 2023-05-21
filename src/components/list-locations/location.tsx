import { useDispatch } from 'react-redux';
import {
  addCurrentCity,
  removeCityFromList,
} from '../../store/cities-slice.ts';
import { fetchWeatherNowDetails } from '../../store/tab-now-details.ts';
import { fetchWeatherForecast } from '../../store/tab-forecast.ts';
import { getData, setData } from '../../ts/view.ts';
import { VALUES } from '../../ts/consts.ts';
import deleteIcon from '../../assets/img/delete-icon.svg';
import styles from './list-locations.module.css';

function Location({ cityName }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.cityNameWrap}>
      <p
        className={styles.cityName}
        onClick={() => {
          dispatch(fetchWeatherNowDetails(cityName));
          dispatch(fetchWeatherForecast(cityName));
          dispatch(addCurrentCity(cityName));
          setData(VALUES.CURRENT_CITY, cityName);
        }}
      >
        {cityName || 'Amur'}
      </p>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => {
          dispatch(removeCityFromList(cityName));
          const cities = getData(VALUES.CITIES_LIST);
          if (cities) {
            const filteredList = cities.filter((city) => city !== cityName);
            setData(VALUES.CITIES_LIST, filteredList);
          }
        }}
      >
        <img src={deleteIcon} alt="Delete" />
      </button>
    </div>
  );
}

export { Location };
