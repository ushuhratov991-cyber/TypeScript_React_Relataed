import { useContext } from "react";
import { useFormik } from "formik";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { EmployeesContext } from "../../context";
import { EMPLOYEE_FORM_NAMES, type EmployeeFormValues } from "../../types";
import { EmployeeForm, InputsContainer } from "./styles";
import { validationSchema } from "./validation";
function CreateEmployeeForm() {
  const { createEmployee } = useContext(EmployeesContext);
  const formik = useFormik<EmployeeFormValues>({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.NAME]: "",
      [EMPLOYEE_FORM_NAMES.SURNAME]: "",
      [EMPLOYEE_FORM_NAMES.AGE]: 0,
      [EMPLOYEE_FORM_NAMES.JOB_POSITION]: "",
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      createEmployee(values);
      resetForm();
    },
  });

  return (
    <EmployeeForm onSubmit={formik.handleSubmit} noValidate>
      <InputsContainer>
        <Input
          id="employee-name"
          name={EMPLOYEE_FORM_NAMES.NAME}
          label="Name*"
          placeholder="Put your Name here..."
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />

        <Input
          id="employee-surname"
          name={EMPLOYEE_FORM_NAMES.SURNAME}
          label="Surname*"
          placeholder="Put your Surname here..."
          type="text"
          value={formik.values.surname}
          onChange={formik.handleChange}
          error={formik.errors.surname}
        />

        <Input
          id="employee-age"
          name={EMPLOYEE_FORM_NAMES.AGE}
          label="Age*"
          placeholder="Write down Age here..."
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
          error={formik.errors.age}
        />

        <Input
          id="employee-job-position"
          name={EMPLOYEE_FORM_NAMES.JOB_POSITION}
          label="Job Position"
          placeholder="Job Position..."
          type="text"
          value={formik.values.jobPosition}
          onChange={formik.handleChange}
          error={formik.errors.jobPosition}
        />
      </InputsContainer>

      <Button name="Create" type="submit" />
    </EmployeeForm>
  );
}
export default CreateEmployeeForm;
