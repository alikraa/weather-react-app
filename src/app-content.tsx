import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ListLocations } from './components/list-locations/list-locations.tsx';
import { Tabs } from './components/tabs/tabs.tsx';
import styles from './app.module.css';

function AppContent() {
  const citiesList = useSelector((state) => state.cities.citiesList);

  const [now, setNow] = useState(true);
  const [details, setDetails] = useState(false);
  const [forecast, setForecast] = useState(false);

  const switchTab = (
    tabNow: boolean,
    tabDetails: boolean,
    tabForecast: boolean
  ) => {
    setNow(tabNow);
    setDetails(tabDetails);
    setForecast(tabForecast);
  };

  return (
    <div className={styles.data}>
      <div className={styles.tabsContent}>
        <nav className={styles.navigation}>
          <button
            className={`${styles.now} ${styles.tab} ${
              now ? styles.active : ''
            }`}
            type="button"
            onClick={() => switchTab(true, false, false)}
          >
            <a href="#now" className={now ? styles.link : ''}>
              Now
            </a>
          </button>
          <button
            className={`${styles.details} ${styles.tab} ${
              details ? styles.active : ''
            }`}
            type="button"
            onClick={() => switchTab(false, true, false)}
          >
            <a href="#details" className={details ? styles.link : ''}>
              Details
            </a>
          </button>
          <button
            className={`${styles.forecast} ${styles.tab} ${
              forecast ? styles.active : ''
            }`}
            type="button"
            onClick={() => switchTab(false, false, true)}
          >
            <a href="#forecast" className={forecast ? styles.link : ''}>
              Forecast
            </a>
          </button>
        </nav>
        <Tabs />
      </div>
      <ListLocations citiesList={citiesList} />
    </div>
  );
}

export { AppContent };
