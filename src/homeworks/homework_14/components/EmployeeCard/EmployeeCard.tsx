import { useContext } from "react";
import Button from "components/Button/Button";
import { EmployeesContext } from "../../context";
import { type EmployeeCardProps } from "./types";
import { CardWrapper, EmployeeInfo } from "./styles";
function EmployeeCard({ employee }: EmployeeCardProps) {
  const { deleteEmployee } = useContext(EmployeesContext);

  return (
    <CardWrapper>
      <EmployeeInfo>
        <dt>Name</dt>

        <dd>{employee.name}</dd>

        <dt>Surname</dt>

        <dd>{employee.surname}</dd>

        <dt>Age</dt>

        <dd>{employee.age}</dd>

        <dt>Job Position</dt>

        <dd>{employee.jobPosition || "Not specified"}</dd>
      </EmployeeInfo>

      <Button name="Delete" isRed onClick={() => deleteEmployee(employee.id)} />
    </CardWrapper>
  );
}
export default EmployeeCard;
