import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER } from '../ts/consts.ts';
import { WeatherForecast } from '../ts/interfaces.ts';

const fetchWeatherForecast = createAsyncThunk<
  WeatherForecast,
  string,
  { rejectValue: string | unknown }
>('weatherForecast/fetchForecast', async (cityName, { rejectWithValue }) => {
  try {
    const URL = `${SERVER.FORECAST}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
    const response = await fetch(URL);
    if (!response.ok) {
      throw rejectWithValue(`data is not found, ${response.status}`);
    }
    const weatherData = await response.json();
    const forecastList = await weatherData.list.slice(0, 4);
    return forecastList;
  } catch (error: unknown) {
    return rejectWithValue(error.message);
  }
});

const initialState: WeatherForecast = {
  data: [],
  status: '',
  error: null,
};

const weatherForecastSlice = createSlice({
  name: 'weatherForecast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherForecast.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchWeatherForecast.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.data = action.payload;
      })
      .addCase(fetchWeatherForecast.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default weatherForecastSlice.reducer;
export { fetchWeatherForecast };
