import { useSelector } from 'react-redux';
import { ListLocations } from './components/list-locations/list-locations.tsx';
import { Tabs } from './components/tabs/tabs.tsx';
import styles from './app.module.css';

function AppContent() {
  const citiesList = useSelector((state) => state.cities.citiesList);
  return (
    <div className={styles.data}>
      <div className={styles.tabsContent}>
        <nav className={styles.navigation}>
          <button
            className={`${styles.now} ${styles.tab} ${styles.active}`}
            type="button"
          >
            <a href="#now" className={styles.link}>
              Now
            </a>
          </button>
          <button className={`${styles.details} ${styles.tab}`} type="button">
            <a href="#details">Details</a>
          </button>
          <button className={`${styles.forecast} ${styles.tab}`} type="button">
            <a href="#forecast">Forecast</a>
          </button>
        </nav>
        <Tabs />
      </div>
      <ListLocations citiesList={citiesList} />
    </div>
  );
}

export { AppContent };
