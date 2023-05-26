import { useAppDispatch } from '../../store/hooks.ts';
import {
  addCurrentCity,
  removeCityFromList,
  switchButton,
} from '../../store/cities-slice.ts';
import { fetchWeatherNowDetails } from '../../store/tab-now-details-slice.ts';
import { fetchWeatherForecast } from '../../store/tab-forecast-slice.ts';
import { LocationProps } from '../../ts/interfaces.ts';
import { getData, setData } from '../../ts/view.ts';
import { VALUES } from '../../ts/consts.ts';
import deleteIcon from '../../assets/img/delete-icon.svg';
import styles from './list-locations.module.css';

function Location({ cityName }: LocationProps) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.cityNameWrap}>
      <p
        className={styles.cityName}
        onClick={() => {
          dispatch(fetchWeatherNowDetails(cityName));
          dispatch(fetchWeatherForecast(cityName));
          dispatch(addCurrentCity(cityName));
          setData(VALUES.CURRENT_CITY, cityName);
          dispatch(switchButton(true));
        }}
      >
        {cityName || 'Amur'}
      </p>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => {
          dispatch(removeCityFromList(cityName));
          dispatch(switchButton(false));
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
