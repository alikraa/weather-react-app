import rainIcon from '../../assets/img/rain-icon.svg';
import { CardForecast } from '../../ts/interfaces.ts';
import styles from './tabs.module.css';

function ForecastCard({ time }: CardForecast) {
  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardPart1}>
          <p className={styles.date}>17 May</p>
          <p className={styles.time}>{time}</p>
        </div>
        <div className={styles.cardPart2}>
          <div className={styles.weatherData}>
            <p className={`${styles.temp} ${styles.nowTemp}`}>
              Temperature: 13°
            </p>
            <p className={`${styles.temp} ${styles.feelingTemp}`}>
              Feels like: 10°
            </p>
          </div>
          <div className={styles.imgWrap}>
            <figure>
              <figcaption className={styles.iconCaption}>Rain</figcaption>
              <img src={rainIcon} alt="Rain" className={styles.weatherIcon} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ForecastCard };
