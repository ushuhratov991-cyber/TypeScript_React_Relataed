import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { Facebook_PageWrapper, ButtonControl } from "./styles";

function Facebook() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Facebook_PageWrapper>
      📌 Ключевые факты • Главная функция: общение с друзьями, обмен текстами,
      фото, видео и создание сообществ по интересам. • Аудитория: более 3
      миллиардов активных пользователей в месяц по всему миру. • Бизнес-модель:
      платформа бесплатна для пользователей, а основной доход приносит
      таргетированная реклама.
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
      <ButtonControl>
        <Button onClick={goToHomePage} name="Go to Home page" />
      </ButtonControl>
    </Facebook_PageWrapper>
  );
}

export default Facebook;
