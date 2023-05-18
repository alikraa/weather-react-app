import { configureStore, combineReducers } from '@reduxjs/toolkit';
import citiesSlice from './cities-slice.ts';

const rootReducer = combineReducers({
  cities: citiesSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
