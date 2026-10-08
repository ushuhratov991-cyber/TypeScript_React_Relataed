// Этот интерфейс описывает ровно те поля, которые пользователь вводит в форму.
export interface EmployeeFormValues {
  name: string; // Имя хранится строкой, потому что это текстовое поле формы.
  surname: string; // Фамилия тоже хранится строкой.
  age: string; // Возраст хранится строкой согласно требованиям задания.
  jobPosition: string; // Должность может быть пустой строкой, если её не ввели.
}

// Employee расширяет данные формы уникальным id для идентификации записи.
export interface Employee extends EmployeeFormValues {
  id: string; // ID позволяет надёжно обновлять и удалять нужного сотрудника.
}

// Этот интерфейс задаёт доступные данные и операции внутри EmployeesContext.
export interface EmployeesContextData {
  employees: Employee[]; // Текущий список сотрудников приложения.
  createEmployee: (values: EmployeeFormValues) => void; // Добавляет сотрудника из формы.
  updateEmployee: (id: string, values: EmployeeFormValues) => void; // Меняет данные записи по ID.
  deleteEmployee: (id: string) => void; // Удаляет одну запись по ID.
  deleteAllEmployees: () => void; // Очищает список целиком.
}

// enum хранит единые имена полей, чтобы не дублировать строки в коде.
export enum EMPLOYEE_FORM_NAMES {
  NAME = "name", // Имя поля name.
  SURNAME = "surname", // Имя поля surname.
  AGE = "age", // Имя поля age.
  JOB_POSITIONS = "jobPosition", // Имя поля должности; ключ соответствует форме.
}
