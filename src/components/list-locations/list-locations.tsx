import deleteIcon from '../../assets/img/delete-icon.svg';
import styles from './list-locations.module.css';

function ListLocations() {
  return (
    <div className={styles.locations}>
      <div className={styles.head}>
        <p className={styles.header}>Added Locations:</p>
      </div>
      <div className={styles.listLocations}>
        <div className={styles.cities}>
          <div className={styles.cityNameWrap}>
            <p className={styles.cityName}>Amur</p>
            <button className={styles.deleteButton} type="button">
              <img src={deleteIcon} alt="Delete" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ListLocations };
