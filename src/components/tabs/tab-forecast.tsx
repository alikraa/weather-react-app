import { format } from 'date-fns';
import { ForecastCard } from './forecast-card.tsx';
import { VALUES } from '../../ts/consts.ts';
import styles from './tabs.module.css';

function TabForecast({ forecastData, cityName }) {
  const cards = VALUES.FORECAST.map((item) => (forecastData.length > 0 ? (
    <ForecastCard
      key={item}
      date={format(new Date(forecastData[item].dt_txt), 'd LLL')}
      time={format(new Date(forecastData[item].dt * 1000), 'HH:mm')}
      temperature={Math.round(forecastData[item].main.temp) + VALUES.DEGREE}
      feelingTemp={
          Math.round(forecastData[item].main.feels_like) + VALUES.DEGREE
        }
      weatherName={forecastData[item]?.weather[0].main}
      weatherIcon={`http://openweathermap.org/img/wn/${forecastData[item].weather[0].icon}@4x.png`}
    />
  ) : (
    <ForecastCard
      key={item}
      date=""
      time=""
      temperature=""
      feelingTemp=""
      weatherName=""
      weatherIcon=""
    />
  )));

  return (
    <div className={styles.tabForecast} id="forecast">
      <div className={styles.headCity}>
        <p className={styles.headCityForecast}>{cityName || 'Aktobe'}</p>
      </div>
      <div className={styles.cards}>{cards}</div>
    </div>
  );
}

export { TabForecast };
