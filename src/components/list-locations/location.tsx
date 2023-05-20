import { useDispatch } from 'react-redux';
import { removeCityFromList } from '../../store/cities-slice.ts';
import { fetchWeatherNowDetails } from '../../store/tab-now-details.ts';
import { fetchWeatherForecast } from '../../store/tab-forecast.ts';
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
        }}
      >
        {cityName || 'Amur'}
      </p>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => dispatch(removeCityFromList(cityName))}
      >
        <img src={deleteIcon} alt="Delete" />
      </button>
    </div>
  );
}

export { Location };
