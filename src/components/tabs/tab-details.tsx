import styles from './tabs.module.css';

function TabDetails() {
  return (
    <div className={styles.tabDetails} id="details">
      <div className={styles.headCity}>
        <p className={styles.headerCity}>Actobe</p>
      </div>
      <div className={styles.information}>
        <p className={`${styles.characteristics} ${styles.temper}`}>
          Temperature: 14°
        </p>
        <p className={`${styles.characteristics} ${styles.feeling}`}>
          Feels like: 10°
        </p>
        <p className={`${styles.characteristics} ${styles.weather}`}>
          Weather: Clouds
        </p>
        <p className={`${styles.characteristics} ${styles.sunrise}`}>
          Sunrise: 03:21
        </p>
        <p className={`${styles.characteristics} ${styles.sunset}`}>
          Sunset: 18:54
        </p>
      </div>
    </div>
  );
}

export { TabDetails };
