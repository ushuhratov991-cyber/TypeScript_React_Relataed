// useState хранит данные сотрудников в памяти на время работы приложения.
import { useState } from "react";
// Routes и Route переключают страницы, Navigate перенаправляет неизвестный путь.
import { Navigate, Route, Routes } from "react-router-dom";
// v4 создаёт уникальный идентификатор для каждой новой записи.
import { v4 } from "uuid";

// Layout задаёт общий вид страницы вокруг маршрутов.
import Layout from "./components/Layout/Layout";
// Импортируем обе страницы, которые будут доступны пользователю.
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import Employees from "./pages/Employees/Employees";

// Маршруты хранятся отдельно, чтобы не повторять адреса строками.
import { EMPLOYEE_ROUTES } from "./constants";
// Context передаёт данные и операции вложенным страницам и компонентам.
import { EmployeesContext } from "./context";
// Типы проверяют объект сотрудника и значения формы на этапе сборки.
import { type Employee, type EmployeeFormValues } from "./types";

// Homework_14 является корневым компонентом этого задания.
function Homework_14() {
  // employees — массив всех созданных сотрудников; сначала он пустой.
  const [employees, setEmployees] = useState<Employee[]>([]);

  // createEmployee превращает введённые значения формы в полноценную запись.
  const createEmployee = (values: EmployeeFormValues): void => {
    // Копируем данные формы и добавляем к ним уникальный id.
    const newEmployee: Employee = { ...values, id: v4() };
    // Функциональная форма setState использует последнее актуальное состояние.
    setEmployees((previousEmployees) => [...previousEmployees, newEmployee]);
  };

  // updateEmployee изменяет данные только у записи с переданным id.
  const updateEmployee = (id: string, values: EmployeeFormValues): void => {
    // Создаём новый массив вместо изменения старого массива напрямую.
    setEmployees((previousEmployees) =>
      // map сохраняет все записи и создаёт обновлённый объект для совпавшего id.
      previousEmployees.map((employee) =>
        employee.id === id ? { ...employee, ...values } : employee,
      ),
    );
  };

  // deleteEmployee удаляет одну запись по её идентификатору.
  const deleteEmployee = (id: string): void => {
    // filter оставляет все записи, кроме сотрудника с выбранным id.
    setEmployees((previousEmployees) =>
      previousEmployees.filter((employee) => employee.id !== id),
    );
  };

  // deleteAllEmployees очищает список сотрудников.
  const deleteAllEmployees = (): void => {
    // Передаём новое пустое состояние вместо массива записей.
    setEmployees([]);
  };

  return (
    // Provider делает эти данные и функции доступными во вложенной части дерева.
    <EmployeesContext.Provider
      value={{
        employees, // Передаём подписчикам актуальный список.
        createEmployee, // Передаём функцию добавления записи.
        updateEmployee, // Передаём функцию сохранения изменений.
        deleteEmployee, // Передаём функцию удаления одной записи.
        deleteAllEmployees, // Передаём функцию очистки всего списка.
      }}
    >
      {/* Layout остаётся общим для обеих страниц. */}
      <Layout>
        {/* Routes показывает ровно тот элемент Route, который совпал с URL. */}
        <Routes>
          {/* Корневой URL открывает форму создания сотрудника. */}
          <Route
            path={EMPLOYEE_ROUTES.CREATE_EMPLOYEE}
            element={<CreateEmployee />}
          />
          {/* /employees открывает список и карточки сотрудников. */}
          <Route
            path={EMPLOYEE_ROUTES.EMPLOYEES}
            element={<Employees />}
          />
          {/* Любой неизвестный URL возвращает пользователя на форму. */}
          <Route
            path="*"
            element={<Navigate to={EMPLOYEE_ROUTES.CREATE_EMPLOYEE} replace />}
          />
        </Routes>
      </Layout>
    </EmployeesContext.Provider>
  );
}

// Экспорт позволяет App.tsx отображать это приложение.
export default Homework_14;
