interface TabNowProps {
  cityName: string;
  cityTemperature: string | null;
  cityIcon: string | null;
  addToList: () => void;
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

export type { TabNowProps, TabDetailsProps, CardForecastProps };
