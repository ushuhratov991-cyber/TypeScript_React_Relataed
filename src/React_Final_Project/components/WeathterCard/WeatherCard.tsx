import { useContext } from "react";

import Button from "components/Button/Button";
import { WeatherContext } from "../../context";

import {
  CardWrapper,
  WeatherInfo,
  Temperature,
  City,
  WeatherIcons,
  WeatherIcon,
  WeatherSummary,
  CardActions,
} from "./styles";

import { type WeatherDataProps } from "./types";

function WeatherCard({ weather, isSaved = false }: WeatherDataProps) {
  const { saveWeather, deleteCurrentCard, deleteWeather } =
    useContext(WeatherContext);
  const iconUrl = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;

  return (
    <CardWrapper>
      <WeatherInfo>
        <WeatherSummary>
          <Temperature>{Math.round(weather.main.temp)}°</Temperature>
          <City>{weather.name}</City>
        </WeatherSummary>
        <WeatherIcons>
          <WeatherIcon src={iconUrl} alt={weather.weather[0].description} />
          <WeatherIcon src={iconUrl} alt="" />
          <WeatherIcon src={iconUrl} alt="" />
        </WeatherIcons>
      </WeatherInfo>
      <CardActions>
        {!isSaved && <Button name="Save" onClick={saveWeather} />}
        <Button
          name="Delete"
          onClick={
            isSaved ? () => deleteWeather(weather.uid) : deleteCurrentCard
          }
        />
      </CardActions>
    </CardWrapper>
  );
}

export default WeatherCard; 
