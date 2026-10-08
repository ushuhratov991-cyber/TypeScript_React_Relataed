import { createContext } from "react";
import { type EmployeesContextData } from "./types";
export const EmployeesContext = createContext<EmployeesContextData>({
  employees: [],
  createEmployee: () => undefined,
  deleteEmployee: () => undefined,
  deleteAllEmployees: () => undefined,
});
