// Yup строит схему проверки, которую Formik использует перед отправкой формы.
import * as Yup from "yup";

// employeeSchema задаёт ограничения для каждого поля формы.
export const employeeSchema = Yup.object({
  // Имя обязательно и должно содержать от 2 до 50 символов.
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be 50 characters or fewer"),
  // Фамилия обязательна и может быть длиной не более 15 символов.
  surname: Yup.string()
    .required("Surname is required")
    .max(15, "Surname must be 15 characters or fewer"),
  // Возраст обязателен; схема хранит строку и ограничивает её длину тремя знаками.
  age: Yup.string()
    .required("Age is required")
    .min(1, "Age must be at least 1 character")
    .max(3, "Age must be 3 characters or fewer"),
  // Должность можно оставить пустой, но введённый текст ограничен 30 символами.
  jobPosition: Yup.string().max(
    30,
    "Job Position must be 30 characters or fewer",
  ),
});
