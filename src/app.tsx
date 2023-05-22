import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppContent } from './app-content.tsx';
import { ModalWindow } from './components/modal-window/modal-window.tsx';
import { fetchWeatherNowDetails } from './store/tab-now-details-slice.ts';
import { fetchWeatherForecast } from './store/tab-forecast-slice.ts';
import { VALUES } from './ts/consts.ts';
import {
  addCityToList,
  addCurrentCity,
  switchButton,
} from './store/cities-slice.ts';
import { getData } from './ts/view.ts';
import searchIcon from './assets/img/search-icon.svg';
import styles from './app.module.css';

function App() {
  const dispatch = useDispatch();
  const [currentCity, setCurrentCity] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const requestStatus = useSelector((state) => state.weatherNowDetails.status);

  useEffect(() => {
    const cities = getData(VALUES.CITIES_LIST);
    if (cities) {
      cities.forEach((city) => dispatch(addCityToList(city)));
    }
  }, []);

  useEffect(() => {
    const currentCityName = getData(VALUES.CURRENT_CITY);
    const cities = getData(VALUES.CITIES_LIST);
    if (currentCityName) {
      dispatch(addCurrentCity(currentCityName));
      dispatch(fetchWeatherNowDetails(currentCityName));
      dispatch(fetchWeatherForecast(currentCityName));
    }

    if (cities.includes(currentCityName)) {
      dispatch(switchButton(true));
    } else {
      dispatch(switchButton(false));
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      isNaN(currentCity)
      && currentCity.trim()
      && requestStatus !== 'rejected'
    ) {
      dispatch(fetchWeatherNowDetails(currentCity));
      dispatch(fetchWeatherForecast(currentCity));
      dispatch(switchButton(false));
    } else {
      setIsOpen(false);
    }
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
              <button className={styles.searchingButton} type="submit">
                <img src={searchIcon} alt="Search" />
              </button>
            </form>
          </div>
          <AppContent />
        </div>
      </div>
      <ModalWindow
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        text={VALUES.CHECK_CITY}
      />
    </>
  );
}

export { App };
