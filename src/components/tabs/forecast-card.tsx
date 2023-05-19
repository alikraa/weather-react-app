import { CardForecastProps } from '../../ts/interfaces.ts';
import rainIcon from '../../assets/img/rain-icon.svg';
import styles from './tabs.module.css';

function ForecastCard({
  date,
  time,
  temperature,
  feelingTemp,
  weatherName,
  weatherIcon,
}: CardForecastProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardPart1}>
          <p className={styles.date}>{date || '17 May'}</p>
          <p className={styles.time}>{time || '12:00'}</p>
        </div>
        <div className={styles.cardPart2}>
          <div className={styles.weatherData}>
            <p className={`${styles.temp} ${styles.nowTemp}`}>
              Temperature: {temperature || '13°'}
            </p>
            <p className={`${styles.temp} ${styles.feelingTemp}`}>
              Feels like: {feelingTemp || '10°'}
            </p>
          </div>
          <div className={styles.imgWrap}>
            <figure>
              <figcaption className={styles.iconCaption}>
                {weatherName || 'Rain'}
              </figcaption>
              <img
                src={weatherIcon || rainIcon}
                alt="Rain"
                className={styles.weatherIcon}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ForecastCard };
