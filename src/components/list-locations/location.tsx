import { useAppDispatch } from '../../store/hooks.ts';
import {
  addCurrentCity,
  removeCityFromList,
  switchButton,
} from '../../store/cities-slice.ts';
import { fetchWeatherNowDetails } from '../../store/tab-now-details-slice.ts';
import { fetchWeatherForecast } from '../../store/tab-forecast-slice.ts';
import { LocationProps } from '../../ts/interfaces.ts';
import { setData, updateList } from '../../ts/view.ts';
import { VALUES } from '../../ts/consts.ts';
import deleteIcon from '../../assets/img/delete-icon.svg';
import styles from './list-locations.module.css';

function Location({ cityName, currentCityName }: LocationProps) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.cityNameWrap}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
      jsx-a11y/no-noninteractive-element-interactions */}
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
          updateList(VALUES.CITIES_LIST, cityName);

          return currentCityName === cityName
            ? dispatch(switchButton(false))
            : dispatch(switchButton(true));
        }}
      >
        <img src={deleteIcon} alt="Delete" />
      </button>
    </div>
  );
}

export { Location };
