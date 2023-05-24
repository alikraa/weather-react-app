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
  setIsOpen: (value: boolean) => boolean;
  text: string;
}

interface State {
  cities: {
    currentCity: string;
    citiesList: string[];
    likeButton: boolean;
  };
  weatherNowDetails: {
    data: [];
    status: string | null;
    error: string | null;
  };
  weatherForecast: {
    data: [];
    status: string | null;
    error: string | null;
  };
}

export type {
  TabNowProps,
  TabDetailsProps,
  CardForecastProps,
  TabForecastProps,
  LocationProps,
  ListLocationsProps,
  ModalWindowProps,
  State,
};
