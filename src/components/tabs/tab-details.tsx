import { TabDetailsProps } from '../../ts/interfaces.ts';
import styles from './tabs.module.css';

function TabDetails({
  cityName,
  cityTemperature,
  cityFeelingTemp,
  cityWeatherName,
  citySunrise,
  citySunset,
}: TabDetailsProps) {
  return (
    <div className={styles.tabDetails} id="details">
      <div className={styles.headCity}>
        <p className={styles.headerCity}>{cityName || 'Aktobe'}</p>
      </div>
      <div className={styles.information}>
        <p className={`${styles.characteristics} ${styles.temper}`}>
          Temperature: {cityTemperature || '14°'}
        </p>
        <p className={`${styles.characteristics} ${styles.feeling}`}>
          Feels like: {cityFeelingTemp || '10°'}
        </p>
        <p className={`${styles.characteristics} ${styles.weather}`}>
          Weather: {cityWeatherName || 'Clouds'}
        </p>
        <p className={`${styles.characteristics} ${styles.sunrise}`}>
          Sunrise: {citySunrise || '03:21'}
        </p>
        <p className={`${styles.characteristics} ${styles.sunset}`}>
          Sunset: {citySunset || '18:54'}
        </p>
      </div>
    </div>
  );
}

export { TabDetails };
