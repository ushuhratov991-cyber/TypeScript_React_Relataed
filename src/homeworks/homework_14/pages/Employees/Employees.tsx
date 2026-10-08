// useContext позволяет прочитать список и действия из общего Context.
import { useContext } from "react";

// EmployeesContext хранит данные сотрудников и функцию очистки списка.
import { EmployeesContext } from "../../context";
// EmployeeCard показывает одну запись сотрудника.
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
// Эти Emotion-компоненты оформляют страницу, пустое состояние и кнопку очистки.
import {
  EmptyState,
  EmptyStateTitle,
  EmployeeGrid,
  Page,
  RemoveAllButton,
} from "./styles";

// Employees выводит список сотрудников или сообщение, если список пуст.
function Employees() {
  // Берём актуальные данные и действие очистки из ближайшего Provider.
  const { employees, deleteAllEmployees } = useContext(EmployeesContext);

  return (
    // Page задаёт ширину, фон и отступы области содержимого.
    <Page>
      {/* Если записей нет, вместо пустой сетки показываем понятную подсказку. */}
      {employees.length === 0 ? (
        /* Показываем карточку-подсказку только для пустого массива. */
        <EmptyState>
          {/* Коротко сообщаем, что список пока пуст. */}
          <EmptyStateTitle>No employees yet</EmptyStateTitle>
          {/* Подсказываем, как добавить первую запись. */}
          <p>Create an employee to see them listed here.</p>
        </EmptyState>
      ) : (
        /* Если записи есть, формируем сетку карточек. */
        <EmployeeGrid>
          {/* map создаёт карточку для каждого объекта Employee. */}
          {employees.map((employee) => (
            /* Уникальный id нужен React для правильного обновления списка. */
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </EmployeeGrid>
      )}
      {/* Кнопку полной очистки показываем только при непустом списке. */}
      {employees.length > 0 && (
        /* Нажатие вызывает Context-метод, очищающий массив сотрудников. */
        <RemoveAllButton type="button" onClick={deleteAllEmployees}>
          Remove All Employees
        </RemoveAllButton>
      )}
    </Page>
  );
}

export default Employees;
