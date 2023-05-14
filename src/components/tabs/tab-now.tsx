import cloudIcon from '../../assets/img/cloud-icon.svg';
import styles from './tabs.module.css';

function TabNow() {
  return (
    <div className={styles.tabNow} id="now">
      <p className={styles.temperature}>14&#176</p>
      <img src={cloudIcon} alt="Cloud" className={styles.cloud} />
      <div className={styles.city}>
        <p className={styles.name}>Aktobe</p>
        <button className={styles.heart} type="button">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.54"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export { TabNow };
