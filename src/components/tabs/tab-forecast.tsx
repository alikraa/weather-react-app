import { ForecastCard } from './forecast-card.tsx';
import styles from './tabs.module.css';

function TabForecast() {
  const time = ['12:00', '15:00', '18:00', '21:00'];
  const cards = time.map((item, index) => (
    <ForecastCard key={index} time={item} />
  ));
  return (
    <div className={styles.tabForecast} id="forecast">
      <div className={styles.headCity}>
        <p className={styles.headCityForecast}>Actobe</p>
      </div>
      <div className={styles.cards}>{cards}</div>
    </div>
  );
}

export { TabForecast };
