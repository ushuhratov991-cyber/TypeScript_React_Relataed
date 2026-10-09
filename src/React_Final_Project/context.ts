import { createContext } from "react";

import { type WeatherContextData } from "./types";

export const WeatherContext = createContext<WeatherContextData>({
  currentWeather: undefined,
  savedWeather: [],
  error: undefined,
  isLoading: false,
  getWeather: async () => {},
  saveWeather: () => {},
  deleteCurrentCard: () => {},
  deleteWeather: () => {},
  deleteAllWeather: () => {},
});
