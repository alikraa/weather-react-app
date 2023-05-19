import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SERVER } from '../ts/consts.ts';

const fetchWeatherNowDetails = createAsyncThunk(
  'weatherNowDetails/fetchNowDetails',
  async (cityName, { rejectWithValue, dispatch }) => {
    try {
      const URL = `${SERVER.SERVER_URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`data is not found, ${response.status}`);
      }
      const weatherData = await response.json();
      dispatch(addWeatherNowDetailsData(weatherData));
      return weatherData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherNowDetailsSlice = createSlice({
  name: 'weatherNowDetails',
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  reducers: {
    addWeatherNowDetailsData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [fetchWeatherNowDetails.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchWeatherNowDetails.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.data = action.payload;
    },
    [fetchWeatherNowDetails.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default weatherNowDetailsSlice.reducer;
export const { addWeatherNowDetailsData } = weatherNowDetailsSlice.actions;
export { fetchWeatherNowDetails };
