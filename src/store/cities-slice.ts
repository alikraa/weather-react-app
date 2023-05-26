import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CitiesState {
  currentCity: string;
  citiesList: string[];
  likeButton: boolean;
}

const initialState: CitiesState = {
  currentCity: '',
  citiesList: [],
  likeButton: false,
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCityToList(state, action: PayloadAction<string>) {
      if (!state.citiesList.includes(action.payload)) {
        state.citiesList.push(action.payload);
      }
    },
    removeCityFromList(state, action: PayloadAction<string>) {
      state.citiesList = state.citiesList.filter(
        (city) => city !== action.payload,
      );
    },
    addCurrentCity(state, action: PayloadAction<string>) {
      state.currentCity = action.payload;
    },
    switchButton(state, action: PayloadAction<boolean>) {
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
