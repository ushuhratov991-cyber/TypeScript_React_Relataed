import { useState, useEffect, type ChangeEvent, type ReactNode } from "react";
import axios from "axios";
import { v4 } from "uuid";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import {
  PageWrapper,
  JokesContainer,
  Card,
  Text,
  ErrorText,
  JokeWrapper,
  ButtonControl,
} from "./styles";

interface Joke {
  id: string;
  title: string;
}

function RandomJoke() {
  const [randomJokes, setRandomJokes] = useState<Joke[]>([]);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [search, setSearch] = useState<string>("");

  // const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
  //   setSearch(event.target.value);
  // };

  const RANDOM_JOKES_URL: string =
    "https://official-joke-api.appspot.com/random_joke";

  const getRandomJoke = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(RANDOM_JOKES_URL);
      // Тут пишем логику по успешно пришедшим данным с сервера
      // `${response.data.setup} ${response.data.punchline}`
      setRandomJokes((prevValue: Joke[]) => {
        return [
          ...prevValue,
          {
            id: v4(),
            title: `${response.data.setup} ${response.data.punchline}`,
          },
        ];
      });
    } catch (error: any) {
      // Тут пишем логику когда нам приходит ошибка
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const randomJokesElements: ReactNode = randomJokes.map((joke: Joke) => {
    return (
      <JokeWrapper key={joke.id}>
        <Text>{joke.title}</Text>
        <ButtonControl>
          <Button
            isRed
            name="Delete"
            onClick={() => {
              setRandomJokes((prevValue: Joke[]) => {
                return [...prevValue].filter((el: Joke) => {
                  return el.id !== joke.id;
                });
              });
            }}
          />
        </ButtonControl>
      </JokeWrapper>
    );
  });

  useEffect(() => {
    getRandomJoke();
  }, []);

  // UPDATING

  // useEffect(() => {
  //   if (!!search) {
  //     getRandomJoke();
  //   }
  // }, [search]);

  return (
    <PageWrapper>
      <Card>
        {/* <Input
          id="serch_input"
          name="search"
          placeholder="Enter your request"
          label="Search"
          value={search}
          onChange={onSearch}
        /> */}
        <JokesContainer>
          {!!randomJokes && randomJokesElements}
          {!!error && <ErrorText>{error}</ErrorText>}
        </JokesContainer>
        <Button
          disabled={isLoading}
          name="Get Random Joke"
          onClick={getRandomJoke}
        />
      </Card>
    </PageWrapper>
  );
}

export default RandomJoke;
