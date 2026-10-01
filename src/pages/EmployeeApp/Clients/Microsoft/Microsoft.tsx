import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { Micracoft_PageWrapper, ButtonControl } from "./styles";

function Microsoft() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Micracoft_PageWrapper>
      Основные сведения • Дата основания: 4 апреля 1975 года. • Основатели: Билл
      Гейтс и Пол Аллен. • Штаб-квартира: Редмонд, штат Вашингтон, США. •
      Главные продукты и направления: операционная система Windows, пакет
      офисных программ Microsoft 365 (Word, Excel, PowerPoint и др.), облачная
      платформа Microsoft Azure, поисковая система Bing, браузер Microsoft Edge,
      игровая индустрия (Xbox) и развитие технологий искусственного интеллекта
      (Copilot). • Миссия компании: дать возможность каждому человеку и каждой
      организации на планете достичь большего
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
      <ButtonControl>
        <Button onClick={goToHomePage} name="Go to Home page" />
      </ButtonControl>
    </Micracoft_PageWrapper>
  );
}

export default Microsoft;
