import { useContext } from "react";
import Button from "components/Button/Button";
import { EmployeesContext } from "../../context";
import { type EmployeeCardProps } from "./types";
import { CardWrapper, EmployeeInfo, InfoLabel, InfoValue } from "./styles";
function EmployeeCard({ employee }: EmployeeCardProps) {
  const { deleteEmployee } = useContext(EmployeesContext);

  return (
    <CardWrapper>
      <EmployeeInfo>
        <InfoLabel>Name</InfoLabel>

        <InfoValue>{employee.name}</InfoValue>

        <InfoLabel>Surname</InfoLabel>

        <InfoValue>{employee.surname}</InfoValue>

        <InfoLabel>Age</InfoLabel>

        <InfoValue>{employee.age}</InfoValue>

        <InfoLabel>Job Position</InfoLabel>

        <InfoValue>{employee.jobPosition || "Not specified"}</InfoValue>
      </EmployeeInfo>

      <Button name="Delete" isRed onClick={() => deleteEmployee(employee.id)} />
    </CardWrapper>
  );
}
export default EmployeeCard;
