import { useContext, useState, type ChangeEvent, type FormEvent } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import WeatherCard from "../../components/WeathterCard/WeatherCard";

import { WeatherContext } from "../../context";
import { CardWrapper, CardActions } from "../../components/WeathterCard/styles";

import {
  PageWrapper,
  SearchForm,
  CityInput,
  SearchButton,
  ErrorTitle,
  ErrorText,
} from "./styles";

function Home() {
  const [city, setCity] = useState<string>("");
  const { currentWeather, error, isLoading, getWeather, deleteCurrentCard } =
    useContext(WeatherContext);

	const onCityChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setCity(event.target.value);
	}; 

	const onSearch = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault(); 
		getWeather(city); 
	}; 

	return (
    <PageWrapper>
      <SearchForm onSubmit={onSearch}>
        <CityInput>
          <Input
            id="city"
            name="city"
            label="City"
            placeholder="Enter city..."
            value={city}
            onChange={onCityChange}
          />
        </CityInput>
				<SearchButton>
					<Button name="Search" type="submit" disabled={isLoading} />
				</SearchButton>
      </SearchForm>
			{currentWeather && <WeatherCard weather={currentWeather} />}
			{error && (
				<CardWrapper>
					<ErrorTitle>API Error</ErrorTitle>
					<ErrorText>{error.cod}: {error.message}</ErrorText>
					<CardActions>
						<Button name="Delete" onClick={deleteCurrentCard} />
					</CardActions>
				</CardWrapper>
			)}
    </PageWrapper>
  );
}

export default Home; 