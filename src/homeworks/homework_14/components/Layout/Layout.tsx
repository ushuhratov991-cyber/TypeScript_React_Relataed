// Импортируем адреса страниц, чтобы ссылки в шапке совпадали с адресами Routes.
import { EMPLOYEE_ROUTES } from "../../constants";

// Импортируем стилизованные элементы шапки и основного контейнера.
import {
  LayoutWrapper,
  Header,
  Logo,
  Navigation,
  HeaderLink,
  Main,
} from "./styles";
// LayoutProps задаёт тип вложенного содержимого children.
import { type LayoutProps } from "./types";

// Layout задаёт общую шапку и место, куда Router подставляет выбранную страницу.
function Layout({ children }: LayoutProps) {
  return (
    // Внешняя обёртка задаёт общий фон, высоту и шрифт всего приложения.
    <LayoutWrapper>
      {/* Шапка содержит логотип и навигацию между двумя страницами. */}
      <Header>
        {/* Текстовый логотип из предоставленного макета. */}
        <Logo>App Logo</Logo>
        {/* aria-label помогает скринридерам понять назначение блока ссылок. */}
        <Navigation aria-label="Employee pages">
          {/* end делает ссылку активной только на точном корневом адресе /. */}
          <HeaderLink to={EMPLOYEE_ROUTES.CREATE_EMPLOYEE} end>
            Create Employee
          </HeaderLink>
          {/* Вторая ссылка ведёт на список сотрудников. */}
          <HeaderLink to={EMPLOYEE_ROUTES.EMPLOYEES} >Employees</HeaderLink>
        </Navigation>
      </Header>
      {/* Основная область показывает страницу, выбранную маршрутизатором. */}
      <Main>{children}</Main>
    </LayoutWrapper>
  );
}

// Экспорт позволяет использовать Layout в Homework_14.tsx.
export default Layout;
