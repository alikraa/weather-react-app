import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER } from '../ts/consts.ts';

const fetchWeatherForecast = createAsyncThunk(
  'weatherForecast/fetchForecast',
  async (cityName, { rejectWithValue, dispatch }) => {
    try {
      const URL = `${SERVER.FORECAST}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`data is not found, ${response.status}`);
      }
      const weatherData = await response.json();
      const forecastList = await weatherData.list.slice(0, 4);
      dispatch(addWeatherForecastData(forecastList));
      return forecastList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherForecastSlice = createSlice({
  name: 'weatherForecast',
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  reducers: {
    addWeatherForecastData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [fetchWeatherForecast.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchWeatherForecast.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.data = action.payload;
    },
    [fetchWeatherForecast.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default weatherForecastSlice.reducer;
export const { addWeatherForecastData } = weatherForecastSlice.actions;
export { fetchWeatherForecast };
