import { configureStore, combineReducers } from '@reduxjs/toolkit';
import citiesSlice from './cities-slice.ts';
import weatherNowDetailsSlice from './tab-now-details.ts';
import weatherForecastSlice from './tab-forecast.ts';

const rootReducer = combineReducers({
  cities: citiesSlice,
  weatherNowDetails: weatherNowDetailsSlice,
  weatherForecast: weatherForecastSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
