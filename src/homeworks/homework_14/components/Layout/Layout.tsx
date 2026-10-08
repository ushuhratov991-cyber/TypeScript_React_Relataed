import { EMPLOYEE_ROUTES } from "../../constants";
import {
  LayoutWrapper,
  Header,
  Logo,
  Navigation,
  HeaderLink,
  Main,
} from "./styles";
import { type LayoutProps } from "./types";
function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header>
        <Logo>App Logo</Logo>

        <Navigation aria-label="Employee pages">
          <HeaderLink to={EMPLOYEE_ROUTES.CREATE_EMPLOYEE} end>
            Create Employee
          </HeaderLink>

          <HeaderLink to={EMPLOYEE_ROUTES.EMPLOYEES}>Employees</HeaderLink>
        </Navigation>
      </Header>

      <Main>{children}</Main>
    </LayoutWrapper>
  );
}
export default Layout;
