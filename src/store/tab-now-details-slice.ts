import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SERVER } from '../ts/consts.ts';
import { WeatherNowDetails } from '../ts/interfaces.ts';

const fetchWeatherNowDetails = createAsyncThunk<
  WeatherNowDetails,
  string,
  { rejectValue: string | unknown }
>(
  'weatherNowDetails/fetchNowDetails',
  async (cityName, { rejectWithValue }) => {
    try {
      const URL = `${SERVER.SERVER_URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`data is not found, ${response.status}`);
      }
      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState: WeatherNowDetails = {
  data: [],
  status: '',
  error: null,
};

const weatherNowDetailsSlice = createSlice({
  name: 'weatherNowDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherNowDetails.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchWeatherNowDetails.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.data = action.payload;
      })
      .addCase(fetchWeatherNowDetails.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default weatherNowDetailsSlice.reducer;
export { fetchWeatherNowDetails };
