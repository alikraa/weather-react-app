import { createSlice } from '@reduxjs/toolkit';

const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    currentCity: '',
    citiesList: [],
    likeButton: false,
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
    switchButton(state, action) {
      state.likeButton = action.payload;
    },
  },
});

export default citiesSlice.reducer;
export const {
  addCityToList,
  removeCityFromList,
  addCurrentCity,
  switchButton,
} = citiesSlice.actions;
