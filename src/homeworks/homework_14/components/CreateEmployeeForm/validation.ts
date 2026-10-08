import * as Yup from "yup";
import { EMPLOYEE_FORM_NAMES } from "../../types";
export const validationSchema = Yup.object().shape({
  [EMPLOYEE_FORM_NAMES.NAME]: Yup.string()
    .required("Name is required")
    .min(2, "Name must contain at least 2 characters")
    .max(50, "Name must contain no more than 50 characters"),
  [EMPLOYEE_FORM_NAMES.SURNAME]: Yup.string()
    .required("Surname is required")
    .max(15, "Surname must contain no more than 15 characters"),
  [EMPLOYEE_FORM_NAMES.AGE]: Yup.string()
    .required("Age is required")
    .min(1, "Age must contain at least 1 character")
    .max(3, "Age must contain no more than 3 characters"),
  [EMPLOYEE_FORM_NAMES.JOB_POSITION]: Yup.string().max(
    30,
    "Job Position must contain no more than 30 characters",
  ),
});
