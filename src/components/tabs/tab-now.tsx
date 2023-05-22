import { useSelector } from 'react-redux';
import { TabNowProps } from '../../ts/interfaces.ts';
import cloudIcon from '../../assets/img/cloud-icon.svg';
import heartIcon from '../../assets/img/heart-icon.svg';
import selectHeartIcon from '../../assets/img/heart-select-icon.svg';
import styles from './tabs.module.css';

function TabNow({
  cityName,
  cityTemperature,
  cityIcon,
  addToList,
  setList,
}: TabNowProps) {
  const likeButton = useSelector((state) => state.cities.likeButton);
  const icon = likeButton ? selectHeartIcon : heartIcon;

  return (
    <div className={styles.tabNow} id="now">
      <p className={styles.temperature}>{cityTemperature || '14°'}</p>
      <img src={cityIcon || cloudIcon} alt="Cloud" className={styles.cloud} />
      <div className={styles.city}>
        <p className={styles.name}>{cityName || 'Aktobe'}</p>
        <button
          className={styles.heart}
          type="button"
          onClick={() => {
            addToList();
            setList();
          }}
        >
          <img src={icon} alt="Add To Favourite" className={styles.like} />
        </button>
      </div>
    </div>
  );
}

export { TabNow };
