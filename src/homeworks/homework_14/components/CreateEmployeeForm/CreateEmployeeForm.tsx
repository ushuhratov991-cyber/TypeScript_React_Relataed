// useContext позволяет форме получить операции создания и обновления из Context.
import { useContext } from "react";
// useFormik управляет значениями полей, ошибками, touched и отправкой формы.
import { useFormik } from "formik";

// Context хранит список сотрудников и методы работы с ним.
import { EmployeesContext } from "../../context";
// EmployeeFormValues описывает значения, которые вводятся в форму.
import { type EmployeeFormValues } from "../../types";
// employeeSchema задаёт Yup-правила проверки каждого поля.
import { employeeSchema } from "./validation";
// Стилизованные Emotion-компоненты формируют разметку и внешний вид формы.
import {
  Form,
  FormActions,
  FormDescription,
  FormTitle,
  Field,
  FieldError,
  FieldInput,
  FieldLabel,
  FieldsGrid,
  PrimaryButton,
  SecondaryButton,
} from "./styles";

// Эти пропсы позволяют одной форме работать и на странице создания, и в карточке.
interface CreateEmployeeFormProps {
  employeeId?: string; // Если id передан, форма обновляет существующую запись.
  initialValues?: EmployeeFormValues; // Начальные данные формы; при создании они пусты.
  onCancel?: () => void; // Колбэк закрывает форму редактирования без сохранения.
}

// Пустые значения нужны для первого открытия формы создания.
const EMPTY_VALUES: EmployeeFormValues = {
  name: "", // Начальное значение поля имени.
  surname: "", // Начальное значение поля фамилии.
  age: "", // Начальное значение поля возраста.
  jobPosition: "", // Необязательная должность начинается пустой.
};

// CreateEmployeeForm содержит поля ввода, валидацию и отправку.
function CreateEmployeeForm({
  // employeeId переключает submit с добавления на обновление.
  employeeId,
  // Если родитель не передал данные, используем пустые значения.
  initialValues = EMPTY_VALUES,
  // onCancel передаётся при редактировании карточки.
  onCancel,
}: CreateEmployeeFormProps) {
  // Получаем две операции, которые нужны форме для сохранения.
  const { createEmployee, updateEmployee } = useContext(EmployeesContext);

  // Formik связывает поля формы, Yup-схему и обработчик отправки.
  const formik = useFormik<EmployeeFormValues>({
    // initialValues задаёт значения полей при открытии формы.
    initialValues,
    // Перезаполняет форму, если выбран другой сотрудник для редактирования.
    enableReinitialize: true,
    // Запускает Yup-валидацию по заданным правилам.
    validationSchema: employeeSchema,
    // Этот обработчик вызывается после успешной проверки всех полей.
    onSubmit: (values, { resetForm }) => {
      // При наличии id обновляем соответствующего сотрудника в Context.
      if (employeeId) {
        updateEmployee(employeeId, values);
        // Закрываем режим редактирования после сохранения.
        onCancel?.();
      } else {
        // Без id создаём новую запись в общем списке.
        createEmployee(values);
        // Очищаем поля после добавления сотрудника.
        resetForm();
      }
    },
  });

  // Возвращаем текст ошибки только после взаимодействия пользователя с полем.
  const fieldError = (field: keyof EmployeeFormValues) =>
    formik.touched[field] ? formik.errors[field] : undefined;

  return (
    // Form вызывает handleSubmit Formik и отключает браузерные всплывающие ошибки.
    <Form onSubmit={formik.handleSubmit} noValidate>
      {/* Заголовок и описание меняются в зависимости от режима формы. */}
      <div>
        <FormTitle>{employeeId ? "Edit employee" : "Create employee"}</FormTitle>
        <FormDescription>
          {employeeId
            ? "Update the employee details below."
            : "Add a new employee to your team."}
        </FormDescription>
      </div>

      {/* Сетка содержит все поля сотрудника; сама сетка настраивается в styles.ts. */}
      <FieldsGrid>
        {/* Группа поля имени: label, управляемый input и сообщение об ошибке. */}
        <Field>
          {/* htmlFor связывает подпись с id поля и делает её кликабельной. */}
          <FieldLabel htmlFor="name">Name *</FieldLabel>
          {/* id связывает label; name связывает поле с Formik; autoComplete помогает браузеру; placeholder показывает пример; value и обработчики синхронизируют ввод; aria-invalid сообщает об ошибке доступным технологиям; $hasError включает красную границу. */}
          <FieldInput
            id="name"
            name="name"
            autoComplete="given-name"
            placeholder="Enter name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(fieldError("name"))}
            $hasError={Boolean(fieldError("name"))}
          />
          {fieldError("name") && <FieldError>{fieldError("name")}</FieldError>}
        </Field>

        {/* Группа фамилии использует то же Formik-состояние и схему проверки. */}
        <Field>
          {/* htmlFor связывает подпись Surname с полем surname. */}
          <FieldLabel htmlFor="surname">Surname *</FieldLabel>
          {/* name указывает ключ Formik, value показывает значение, onChange сохраняет ввод, onBlur отмечает поле посещённым, а остальные props задают подсказки и состояние ошибки. */}
          <FieldInput
            id="surname"
            name="surname"
            autoComplete="family-name"
            placeholder="Enter surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(fieldError("surname"))}
            $hasError={Boolean(fieldError("surname"))}
          />
          {fieldError("surname") && (
            <FieldError>{fieldError("surname")}</FieldError>
          )}
        </Field>

        {/* Возраст оставлен строкой; inputMode только просит мобильную клавиатуру с цифрами. */}
        <Field>
          {/* htmlFor указывает на id поля возраста. */}
          <FieldLabel htmlFor="age">Age *</FieldLabel>
          {/* inputMode предлагает цифровую мобильную клавиатуру; значение и обработчики управляются Formik; aria-invalid и $hasError отражают результат проверки. */}
          <FieldInput
            id="age"
            name="age"
            inputMode="numeric"
            placeholder="Enter age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(fieldError("age"))}
            $hasError={Boolean(fieldError("age"))}
          />
          {fieldError("age") && <FieldError>{fieldError("age")}</FieldError>}
        </Field>

        {/* Должность необязательна, но при вводе ограничивается Yup-схемой. */}
        <Field>
          {/* Эта подпись не отмечена звёздочкой, потому что поле необязательное. */}
          <FieldLabel htmlFor="jobPosition">Job position</FieldLabel>
          {/* name связывает поле со свойством jobPosition; Formik хранит текст и Yup проверяет его длину, если он введён. */}
          <FieldInput
            id="jobPosition"
            name="jobPosition"
            placeholder="Enter job position"
            value={formik.values.jobPosition}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(fieldError("jobPosition"))}
            $hasError={Boolean(fieldError("jobPosition"))}
          />
          {fieldError("jobPosition") && (
            <FieldError>{fieldError("jobPosition")}</FieldError>
          )}
        </Field>
      </FieldsGrid>

      {/* Внизу расположены сохранение и, только при редактировании, отмена. */}
      <FormActions>
        {/* submit запускает Formik-валидацию, затем onSubmit при успехе. */}
        <PrimaryButton type="submit">
          {employeeId ? "Save changes" : "Create employee"}
        </PrimaryButton>
        {/* Отмена отображается только для существующей записи. */}
        {employeeId && onCancel && (
          /* Нажатие закрывает форму, не вызывая обновление. */
          <SecondaryButton type="button" onClick={onCancel}>
            Cancel
          </SecondaryButton>
        )}
      </FormActions>
    </Form>
  );
}

// Экспорт позволяет использовать компонент на обеих страницах приложения.
export default CreateEmployeeForm;
