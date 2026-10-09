export interface WeatherResponse {
  name: string;
  main: { temp: number };

  weather: {
    description: string;
    icon: string;
  }[];
}

export interface WeatherData extends WeatherResponse {
  uid: string;
}

export interface WeatherError {
  cod: number | string;
  errorMessage: string;
}

export interface WeatherContextData {
  currentWeather: WeatherData | undefined;
  savedWeather: WeatherData[];
  error: WeatherError | undefined;
  isLoading: boolean;

  getWeather: (city: string) => Promise<void>;
  saveWeather: () => void;
  deleteCurrentCard: () => void;
  deleteWeather: (uid: string) => void;
  deleteAllWeather: () => void;
}
