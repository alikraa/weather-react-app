import React, { useState } from 'react';
import { AppContent } from './app-content.tsx';
import { ModalWindow } from './components/modal-window/modal-window.tsx';
import searchIcon from './assets/img/search-icon.svg';
import styles from './app.module.css';

function App() {
  const [currentCity, setCurrentCity] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.searchField}>
            <form
              className={styles.searchCity}
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                type="text"
                name="input__city"
                className={styles.searching}
                placeholder="Aktobe"
                onChange={(e) => handleChange(e)}
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
