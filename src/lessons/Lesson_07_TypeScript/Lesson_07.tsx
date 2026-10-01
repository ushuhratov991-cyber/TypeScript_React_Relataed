import Button from "components/Button/Button";
import Counter from "components/Counter/Counter";
import { useState } from "react";

import "./styles.css";

function Lesson_07() {
  // Objects

  interface Admin {
    isAdmin: boolean;
  }

  interface User extends Admin {
    fullName: string;
    age: number;
    job: string;
    pet?: string;
  }

  interface User {
    isFamily: boolean;
  }

  const user1: User = {
    fullName: "John Johnson",
    age: 30,
    job: "QA",
    pet: "Max",
    isAdmin: true,
    isFamily: true,
  };

  const user2: User = {
    fullName: "Mike Madson",
    age: 40,
    job: "Frontend Developer",
    isAdmin: false,
    isFamily: true,
  };

  // type

  type GlobalAnimalProps = {
    isAnimal: boolean;
  };

  type Animal = {
    type: string;
    age: number;
    color: string;
    isWild: boolean;
  };

  const animal: Animal | GlobalAnimalProps = {
    isAnimal: true,
    type: "Tiger",
    age: 12,
    color: "orange",
    isWild: true,
  };

  // type позволяет создавть собственные типы или комбинации типов
  type UserDataFromServer = null | undefined | User;

  let userData: UserDataFromServer = undefined;

  // предстваил что мы отправляем запрос на сервер с целью получения данных пользователя
  // 1. Нам приходит обьект пользователя
  userData = user1;

  // 2. Нам прихожит null
  userData = null;

  //////////////////////////////////////////////////////////////////////////////////////
  // Generic
  // До использования Generic
  //   const stringArray: string[] = ["a", "b", "c"];
  //   const numberArray: number[] = [1, 2, 3];
  //   const bolleanArray: boolean[] = [true, false, true];

  // После использования Generic
  type ArrayGenerator<Type> = Type[];

  const stringArray: ArrayGenerator<string> = ["a", "b", "c"];
  const numberArray: ArrayGenerator<number> = [1, 2, 3];
  const bolleanArray: ArrayGenerator<boolean> = [true, false, true];

  // Generic with objects

  interface Item3Value {
    model: string;
    articul: number;
  }

  interface Item<ValueType> {
    type: string;
    value: ValueType;
  }

  const item1: Item<number> = {
    type: "Tv",
    value: 123456789,
  };

  const item2: Item<string> = {
    type: "PC",
    value: "Xiaomi Model 123",
  };

  const item3: Item<Item3Value> = {
    type: "PC",
    value: {
      model: "Apple Pro Book",
      articul: 12354253453452353,
    },
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  //   Создайте функцию getWeather, которая бы принимала следующие параметры: код погоды и функцию decode(которая дает расшифровку погоды по коду). Функция decode должна возвращать строку, описывающую погоду, а фукнция getWeather должна возвращать результат выполнения функции decode
  // Таблица соответствия код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка (видимость от 1 до 9 км) HZ – мгла (видимость менее 10 км) FU – дым (видимость менее 10 км) DS - пыльная буря (видимость менее 10 км) SS - песчаная буря (видимость менее 10 км) Подсказка: удобно использовать switch-case в функции decode для расшифровки погоды по коду
  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  // enum

  enum WEATHER_CODES {
    SQ = "SQR",
    PO = "PO",
    FC = "FC",
    BR = "BR",
    HZ = "HZ",
    FU = "FU",
    DS = "DS",
    SS = "SS",
  }

  const decode = (weatherCode: string): string => {
    switch (weatherCode) {
      case WEATHER_CODES.SQ: {
        return "шквал";
      }
      case WEATHER_CODES.PO: {
        return "пыльный вихрь";
      }
      case WEATHER_CODES.FC: {
        return "торнадо";
      }
      case WEATHER_CODES.BR: {
        return "дымка (видимость от 1 до 9 км)";
      }
      case WEATHER_CODES.HZ: {
        return "мгла (видимость менее 10 км)";
      }
      case WEATHER_CODES.FU: {
        return "дым (видимость менее 10 км)";
      }
      case WEATHER_CODES.DS: {
        return "пыльная буря (видимость менее 10 км)";
      }
      case WEATHER_CODES.SS: {
        return "песчаная буря (видимость менее 10 км)";
      }
      default: {
        return "Такого кода не существует";
      }
    }
  };

  const getWeather = (
    decodeFucntion: (weatherCode: string) => string,
    weatherCode: string,
  ) => {
    return decodeFucntion(weatherCode);
  };

  console.log(getWeather(decode, WEATHER_CODES.SQ));
  console.log(getWeather(decode, "asdad"));

  const [count, setCount] = useState<number>(0);

  const onMinus = (): void => {
    setCount((prevValue: number): number => {
      return prevValue - 1;
    });
  };

  const onPlus = (): void => {
    setCount((prevValue: number): number => {
      return prevValue + 1;
    });
  };

  const sendCountToServer = () => {
    console.log(count);
  };

  return (
    <div>
      Lesson_07
      <Button name="Send count to server" onClick={sendCountToServer} />
      <Counter count={count} onMinus={onMinus} onPlus={onPlus} />
    </div>
  );
}

export default Lesson_07;
