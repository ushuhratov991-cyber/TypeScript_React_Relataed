import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutWrapper = styled.div`
  @font-face {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/lato-regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("/fonts/lato-bold.ttf") format("truetype");
  }

  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  background-color: #112233;
  color: #1e1e1e;
  font-family: "Lato", sans-serif;

  input,
  button {
    font-family: inherit;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  min-height: 120px;
  padding: 24px 81px;
  border: 1px solid #000000;
  background-color: #faf9ff;
  color: #000000;

  @media (max-width: 700px) {
    flex-wrap: wrap;
    gap: 20px;
    padding: 24px;
  }
`;

export const Logo = styled.div`
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 56px;

  @media (max-width: 700px) {
    gap: 24px;
  }
`;

export const HeaderLink = styled(NavLink)`
  color: #000000;
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  text-decoration: none;

  &.active {
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 6px;
  }

  @media (max-width: 700px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  min-width: 0;
`;
