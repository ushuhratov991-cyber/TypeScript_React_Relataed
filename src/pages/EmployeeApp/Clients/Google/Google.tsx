import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { Google_PageWrapper, ButtonControl } from "./styles";

function Google() {
    const navigate = useNavigate();

    const goToHomePage = () => {
      navigate("/");
    };

    const goBack = () => {
      navigate(-1);
    };

    return (
      <Google_PageWrapper>
        Основные факты • Основатели: Ларри Пейдж и Сергей Брин. • Дата
        основания: 4 сентября 1998 года. • Доля рынка: Занимает около 90%
        мирового рынка поисковых систем. • Материнская компания: Alphabet Inc.
        Популярные сервисы • Google Поиск: Главный инструмент для поиска
        веб-страниц и информации. • Android: Самая популярная мобильная
        операционная система в мире. • YouTube: Крупнейший видеохостинг. •
        Google Диск / Фото: Облачные хранилища (бесплатно по умолчанию доступно
        15 ГБ). • Google Почта (Gmail) и Карты: Популярные инструменты для
        коммуникации и навигации
        <ButtonControl>
          <Button onClick={goBack} name="Go back" />
        </ButtonControl>
        <ButtonControl>
          <Button onClick={goToHomePage} name="Go to Home page" />
        </ButtonControl>
      </Google_PageWrapper>
    );
}

export default Google;
