interface TabNowProps {
  cityName: string;
  cityTemperature: string | null;
  cityIcon: string | null;
  addToList: () => void;
  setList: () => void;
}

interface TabDetailsProps {
  cityName: string;
  cityTemperature: string | null;
  cityFeelingTemp: string | null;
  cityWeatherName: string | null;
  citySunrise: string | null;
  citySunset: string | null;
}

interface CardForecastProps {
  date: string;
  time: string;
  temperature: number | string;
  feelingTemp: number | string;
  weatherName: string;
  weatherIcon: string;
}

interface TabForecastProps {
  forecastData: [];
  cityName: string;
}

interface LocationProps {
  cityName: string;
}

interface ListLocationsProps {
  citiesList: string[];
}

interface ModalWindowProps {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
  text: string;
}

interface CitiesState {
  currentCity: string;
  citiesList: string[];
  likeButton: boolean;
}

interface WeatherNowDetails {
  data: object;
  status: string;
  error: string | unknown;
}

interface WeatherForecast {
  data: object;
  status: string;
  error: string | unknown;
}

export type {
  TabNowProps,
  TabDetailsProps,
  CardForecastProps,
  TabForecastProps,
  LocationProps,
  ListLocationsProps,
  ModalWindowProps,
  CitiesState,
  WeatherNowDetails,
  WeatherForecast,
};
