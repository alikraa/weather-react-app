interface CitiesState {
  currentCity: string;
  citiesList: string[];
  likeButton: boolean;
}

interface DataNowDetails {
  weather: [
    {
      main: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
  };
  dt: number;
  sys: {
    sunrise: number;
    sunset: number;
  };
  name: string;
}

interface WeatherNowDetails {
  data: DataNowDetails;
  status: string;
  error: string | unknown;
}

interface DataForecast {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
  };
  weather: [
    {
      main: string;
      icon: string;
    }
  ];
  dt_txt: string;
}

interface WeatherForecast {
  data: DataForecast[];
  status: string;
  error: string | unknown;
}

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
  forecastData: DataForecast[] | [];
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
  DataNowDetails,
  WeatherForecast,
  DataForecast,
};
