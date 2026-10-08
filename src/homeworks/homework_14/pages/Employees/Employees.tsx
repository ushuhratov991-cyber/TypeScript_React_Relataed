import { useContext } from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Button from "components/Button/Button";
import { EmployeesContext } from "../../context";
import {
  ButtonControl,
  CardsContainer,
  EmptyText,
  PageWrapper,
} from "./styles";
function Employees() {
  const { employees, deleteAllEmployees } = useContext(EmployeesContext);

  return (
    <PageWrapper>
      {employees.length === 0 ? (
        <EmptyText>No employees yet</EmptyText>
      ) : (
        <CardsContainer>
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </CardsContainer>
      )}

      {employees.length > 0 && (
        <ButtonControl>
          <Button
            name="Remove All Employees"
            isRed
            onClick={deleteAllEmployees}
          />
        </ButtonControl>
      )}
    </PageWrapper>
  );
}
export default Employees;
