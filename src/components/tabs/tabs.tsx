import { TabDetails } from './tab-details.tsx';
import { TabForecast } from './tab-forecast.tsx';
import { TabNow } from './tab-now.tsx';
import styles from './tabs.module.css';

function Tabs() {
  return (
    <div className={styles.tabs}>
      <TabNow />
      <TabDetails />
      <TabForecast />
    </div>
  );
}

export { Tabs };
