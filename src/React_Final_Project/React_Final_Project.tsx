import { useState } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import axios from "axios";

import { v4 } from "uuid";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Weather from "./pages/Weather/Weather";

import { WeatherContext } from "./context";
import { WEATHERAPP_ROUTES } from "./constants";
import {
  type WeatherData,
  type WeatherError,
  type WeatherResponse,
} from "./types";

function React_Final_Project() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | undefined>(
    undefined,
  );
  const [savedWeather, setSavedWeather] = useState<WeatherData[]>([]);
  const [error, setError] = useState<WeatherError | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getWeather = async (city: string): Promise<void> => {
    if (!city.trim()) {
      alert("Please enter a city name.");
      return;
    }

    setCurrentWeather(undefined);
    setError(undefined);

    const APP_ID = import.meta.env.VITE_OPENWEATHER_API_KEY;

    if (!APP_ID) {
      setError({
        cod: "API key is missing",
        message: "Add your OpenWeahterMap API key.",
      });
      return;
    }

    try {
      setIsLoading(true);

      const response = await axios.get<WeatherResponse>(
        "https://api.openweathermap.org/data/2.5/weather",
        { params: { units: "metric", q: city.trim(), appid: APP_ID } },
      );

      setCurrentWeather({ ...response.data, uid: v4() });
    } catch (error) {
      if (axios.isAxiosError<WeatherError>(error) && error.response) {
        setError(error.response.data);
      } else {
        setError({
          cod: "Network Error",
          message: "Unable to get weather. Please try again",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const saveWeather = (): void => {
    if (currentWeather) {
      setSavedWeather((prevWeather) => [...prevWeather, currentWeather]);
      setCurrentWeather(undefined);
      alert("Weather saved successfully.");
    }
  };

  const deleteCurrentCard = (): void => {
    setCurrentWeather(undefined);
    setError(undefined);

    if (error) {
      alert("Error deleted successfully.");
    }
  };

  const deleteWeather = (uid: string): void => {
    setSavedWeather((prevWeather) =>
      prevWeather.filter((weather) => weather.uid !== uid),
    );
    alert("Weather deleted successfully.");
  };

  const deleteAllWeather = (): void => {
    setSavedWeather([]);
    alert("All cards deleted successfully.");
  };

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        savedWeather,
        error,
        isLoading,
        getWeather,
        saveWeather,
        deleteCurrentCard,
        deleteWeather,
        deleteAllWeather,
      }}
    >
      <Layout>
        <Routes>
          <Route path={WEATHERAPP_ROUTES.HOME} element={<Home />} />
          <Route path={WEATHERAPP_ROUTES.WEATHER} element={<Weather />} />
          <Route
            path="*"
            element={<Navigate to={WEATHERAPP_ROUTES.HOME} replace />}
          />
        </Routes>
      </Layout>
    </WeatherContext.Provider>
  );
}

export default React_Final_Project; 
