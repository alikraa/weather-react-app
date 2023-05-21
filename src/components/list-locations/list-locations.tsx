import { Location } from './location.tsx';
import styles from './list-locations.module.css';

function ListLocations({ citiesList }) {
  const cities = citiesList.map((item) => (
    <Location key={item} cityName={item} />
  ));

  return (
    <div className={styles.locations}>
      <div className={styles.head}>
        <p className={styles.header}>Added Locations:</p>
      </div>
      <div className={styles.listLocations}>
        <div className={styles.cities}>{cities}</div>
      </div>
    </div>
  );
}

export { ListLocations };
