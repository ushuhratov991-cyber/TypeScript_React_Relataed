import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import background from "../../assets/background.png";
import inter from "../../assets/Inter.ttf";

export const LayoutWrapper = styled.div`
  @font-face {
    font-family: "Inter";
    src: url(${inter}) format("truetype");
    font-weight: 100 900;
    font-display: swap;
  }

  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: white;
  font-family: "Inter", sans-serif;
  background: linear-gradient(rgba(29, 32, 45, 0.3), rgba(29, 32, 45, 0.3)),
    url(${background}) center / cover;
  background-attachment: fixed;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  padding: 20px 85px;
  border-bottom: 1px solid #d2d2d2;
  background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
    rgba(18, 45, 77, 0.5);
  backdrop-filter: blur(8.9px);

  @media (max-width: 600px) {
    padding: 20px 16px;
    gap: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 60px;

  @media (max-width: 600px) {
    gap: 20px;
  }
`;

export const HeaderLink = styled(NavLink)`
  color: white;
  font-size: 20px;
  text-decoration: none;

  &.active {
    font-weight: 700;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Main = styled.main`
  width: 100%;
  max-width: 741px;
  margin: 0 auto;
  padding: 0 16px 80px;
`;
