import {useNavigate} from "react-router-dom"

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
  getActiveStyles
} from "./styles";

import {type LayoutProps} from "./types"

function Layout({children}: LayoutProps) {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
  }
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
          <HeaderLink style={getActiveStyles} to="/">
            Home
          </HeaderLink>
          <HeaderLink style={getActiveStyles} to="/clients">
            Clients
          </HeaderLink>
          <HeaderLink style={getActiveStyles} to="/contactUs">
            Contact Us
          </HeaderLink>
          <HeaderLink style={getActiveStyles} to="/about">
            About
          </HeaderLink>
          <HeaderLink style={getActiveStyles} to="/login">
            Login
          </HeaderLink>
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
          <FooterLink to="">Home</FooterLink>
          <FooterLink to="/clients">Clients</FooterLink>
          <FooterLink to="/contactUs">Contact Us</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/login">Login</FooterLink>
        </FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
