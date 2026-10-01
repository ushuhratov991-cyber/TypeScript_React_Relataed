import { useNavigate } from "react-router-dom";

import { NAVIGATION_MENU_ROUTES } from "constants/routes";

import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Logo,
  LogoImg,
  HeaderLink,
  NavigationContainer,
  FooterLogo,
  FooterLink,
  FooterNavigation,
  getActiveStyles,
} from "./styles";

import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToHomePage}>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </Logo>
        <NavigationContainer>
          {Object.keys(NAVIGATION_MENU_ROUTES).map((key, index) => (
            <HeaderLink
              key={key}
              style={getActiveStyles}
              to={Object.values(NAVIGATION_MENU_ROUTES)[index]}
            >
              {key}
            </HeaderLink>
          ))}
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </FooterLogo>
        <FooterNavigation>
          {Object.keys(NAVIGATION_MENU_ROUTES).map((key, index) => (
            <FooterLink
              key={key}
              to={Object.values(NAVIGATION_MENU_ROUTES)[index]}
            >
              {key}
            </FooterLink>
          ))}
        </FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
