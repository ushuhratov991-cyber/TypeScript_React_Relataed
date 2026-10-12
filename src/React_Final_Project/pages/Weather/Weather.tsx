import { useContext } from "react";

import Button from "components/Button/Button";
import WeatherCard from "../../components/WeathterCard/WeatherCard";
import { WeatherContext } from "../../context";

import { PageWrapper, DeleteAllButton } from "./styles";

function Weather() {
  const { savedWeather, deleteAllWeather } = useContext(WeatherContext);

  return (
    <PageWrapper>
      {savedWeather.map((weather) => (
        <WeatherCard key={weather.uid} weather={weather} isSaved />
      ))}
      {savedWeather.length > 0 && (
        <DeleteAllButton>
          <Button name="Delete all cards" onClick={deleteAllWeather} />
        </DeleteAllButton>
      )}
    </PageWrapper>
  );
}

export default Weather;
