import { configureStore, combineReducers } from '@reduxjs/toolkit';
import citiesSlice from './cities-slice.ts';
import weatherNowDetailsSlice from './tab-now-details-slice.ts';
import weatherForecastSlice from './tab-forecast-slice.ts';

const rootReducer = combineReducers({
  cities: citiesSlice,
  weatherNowDetails: weatherNowDetailsSlice,
  weatherForecast: weatherForecastSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
