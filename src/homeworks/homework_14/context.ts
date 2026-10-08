// createContext создаёт общее хранилище, доступное компонентам внутри Provider.
import { createContext } from "react";

// Импортируем тип, чтобы Context проверял форму своих данных и функций.
import { type EmployeesContextData } from "./types";

// Значения по умолчанию нужны до ближайшего Provider; в нормальном приложении
// компоненты получают настоящие значения из Homework_14.tsx.
export const EmployeesContext = createContext<EmployeesContextData>({
  employees: [], // Начальный пустой список сотрудников.
  createEmployee: () => undefined, // Без Provider эта функция ничего не делает.
  updateEmployee: () => undefined, // Заглушка обновления для значения по умолчанию.
  deleteEmployee: () => undefined, // Заглушка удаления одной записи.
  deleteAllEmployees: () => undefined, // Заглушка очистки всего списка.
});
