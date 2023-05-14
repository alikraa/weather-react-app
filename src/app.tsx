import { AppContent } from './app-content.tsx';
import { ModalWindow } from './components/modal-window/modal-window.tsx';
import searchIcon from './assets/img/search-icon.svg';
import styles from './app.module.css';

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.searchField}>
            <form className={styles.searchCity}>
              <input
                type="text"
                className={styles.searching}
                placeholder="Aktobe"
              />
              <button className={styles.searchingButton} type="button">
                <img src={searchIcon} alt="Search" />
              </button>
            </form>
          </div>
          <AppContent />
        </div>
      </div>
      <ModalWindow />
    </>
  );
}

export { App };
