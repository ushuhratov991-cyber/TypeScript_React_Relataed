import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { v4 } from "uuid";

import Layout from "./components/Layout/Layout";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import Employees from "./pages/Employees/Employees";

import { EMPLOYEE_ROUTES } from "./constants";
import { EmployeesContext } from "./context";
import { type Employee, type EmployeeFormValues } from "./types";
import { validateYupSchema } from "formik";

function Homework_14() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const createEmployee = (values: EmployeeFormValues): void => {
    const newEmployee: Employee = { ...values, id: v4() };
    setEmployees((previousEmployees) => [...previousEmployees, newEmployee]);
  };

  const deleteEmployee = (id: string): void => {
    setEmployees((previousEmployees) => 
    previousEmployees.filter((employee) => employee.id !== id), 
    ); 
  }; 

  const deleteAllEmployees = (): void => {
    setEmployees([]);
  };

  return (
    <EmployeesContext.Provider 
    value = {{employees, createEmployee, deleteEmployee, deleteAllEmployees}}>
      <Layout>
        <Routes>
          <Route
            path={EMPLOYEE_ROUTES.CREATE_EMPLOYEE}
            element={<CreateEmployee />}
          />
          <Route path={EMPLOYEE_ROUTES.EMPLOYEES} element={<Employees />} />
          <Route
            path="*"
            element={<Navigate to={EMPLOYEE_ROUTES.CREATE_EMPLOYEE} replace />}
          />
        </Routes>
      </Layout>
    </EmployeesContext.Provider>
  )
}


export default Homework_14;
