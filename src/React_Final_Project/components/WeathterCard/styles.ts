import styled from "@emotion/styled";

import cardBackground from "../../assets/card.svg";

export const CardWrapper = styled.div`
  width: 100%;
  min-height: 220px;
  padding: 27px 36px;
  border-radius: 30px;
  background: url(${cardBackground}) center / cover;
  backdrop-filter: blur(8.9px);

  @media (max-width: 600px) {
    padding: 24px;
  }
`;

export const WeatherInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  min-height: 117px;
`;

export const Temperature = styled.p`
  font-size: 57px;
  font-weight: 500;
  line-height: 69px;
`;

export const City = styled.p`
  margin: 6px 0 0 5px;
  font-size: 20px;
  font-weight: 700;
  overflow-wrap: anywhere;
`;

export const WeatherIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 290px;
  height: 100px;
  flex-shrink: 0;
  margin-right: 78px;

  @media (max-width: 600px) {
    width: 120px;
    gap: 0;
    margin-right: 0;
  }
`;

export const WeatherIcon = styled.img`
  width: 90px;
  height: 100px;
  object-fit: contain;

  @media (max-width: 600px) {
    width: 40px;
  }
`;

export const WeatherSummary = styled.div`
display: flex; 
flex-direction: column; 
`; 

export const CardActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 95px;

  button {
    width: 155px;
    height: 48px;
    border: 1px solid white;
    border-radius: 50px;
    background: transparent;
    color: white;
    font-family: inherit;
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }

    &:focus-visible {
      outline: 2px solid white;
      outline-offset: 3px;
    }
  }

  @media (max-width: 600px) {
    gap: 16px;

    button {
      width: 130px;
    }
  }
`;
