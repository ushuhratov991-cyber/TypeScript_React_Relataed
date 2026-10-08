export interface EmployeeFormValues {
  name: string;
  surname: string;
  age: string;
  jobPosition: string;
}
export interface Employee extends EmployeeFormValues {
  id: string;
}
export interface EmployeesContextData {
  employees: Employee[];
  createEmployee: (values: EmployeeFormValues) => void;
  deleteEmployee: (id: string) => void;
  deleteAllEmployees: () => void;
}
export enum EMPLOYEE_FORM_NAMES {
  NAME = "name",
  SURNAME = "surname",
  AGE = "age",
  JOB_POSITION = "jobPosition",
}
