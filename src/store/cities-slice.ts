import { createSlice } from '@reduxjs/toolkit';

const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    currentCity: '',
    citiesList: [],
  },
  reducers: {
    addCityToList(state, action) {
      if (!state.citiesList.includes(action.payload)) {
        state.citiesList.push(action.payload);
      }
    },
    removeCityFromList(state, action) {
      state.citiesList = state.citiesList.filter(
        (city) => city !== action.payload
      );
    },
    addCurrentCity(state, action) {
      state.currentCity = action.payload;
    },
  },
});

export default citiesSlice.reducer;
export const { addCityToList, removeCityFromList, addCurrentCity } =
  citiesSlice.actions;
