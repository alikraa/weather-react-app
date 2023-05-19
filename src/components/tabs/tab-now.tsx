import cloudIcon from '../../assets/img/cloud-icon.svg';
import heartIcon from '../../assets/img/heart-icon.svg';
import styles from './tabs.module.css';
import { TabNowProps } from '../../ts/interfaces.ts';

function TabNow({ cityName, cityTemperature, cityIcon }: TabNowProps) {
  return (
    <div className={styles.tabNow} id="now">
      <p className={styles.temperature}>{cityTemperature || '14°'}</p>
      <img src={cityIcon || cloudIcon} alt="Cloud" className={styles.cloud} />
      <div className={styles.city}>
        <p className={styles.name}>{cityName || 'Aktobe'}</p>
        <button className={styles.heart} type="button">
          <img src={heartIcon} alt="Add To Favourite" className={styles.like} />
        </button>
      </div>
    </div>
  );
}

export { TabNow };
