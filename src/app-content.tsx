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
          <div className={`${styles.now} ${styles.tab} ${styles.active}`}>
            <a href="#now" className={styles.link}>
              Now
            </a>
          </div>
          <div className={`${styles.details} ${styles.tab}`}>
            <a href="#details">Details</a>
          </div>
          <div className={`${styles.forecast} ${styles.tab}`}>
            <a href="#forecast">Forecast</a>
          </div>
        </nav>
        <Tabs />
      </div>
      <ListLocations citiesList={citiesList} />
    </div>
  );
}

export { AppContent };
