// useContext получает команду удаления, useState управляет режимом редактирования.
import { useContext, useState } from "react";

// Context предоставляет метод удаления для текущей карточки.
import { EmployeesContext } from "../../context";
// Тип данных используется при подготовке значений формы редактирования.
import { type EmployeeFormValues } from "../../types";
// Одна форма используется и для создания, и для редактирования сотрудника.
import CreateEmployeeForm from "../CreateEmployeeForm/CreateEmployeeForm";
// Типизируем проп employee.
import { type EmployeeCardProps } from "./types";
// Emotion-компоненты отвечают за структуру и вид карточки.
import {
  Card,
  CardActions,
  CardHeading,
  DeleteButton,
  EditButton,
  EmployeeDetails,
} from "./styles";

// EmployeeCard показывает данные одного сотрудника и доступные действия.
function EmployeeCard({ employee }: EmployeeCardProps) {
  // Из общего Context берём функцию удаления выбранной записи.
  const { deleteEmployee } = useContext(EmployeesContext);
  // isEditing переключает карточку между просмотром и формой редактирования.
  const [isEditing, setIsEditing] = useState(false);

  // Если нажали Edit, показываем форму с текущими значениями сотрудника.
  if (isEditing) {
    // Formik ожидает значения формы без id, поэтому собираем только поля сотрудника.
    const initialValues: EmployeeFormValues = {
      name: employee.name,
      surname: employee.surname,
      age: employee.age,
      jobPosition: employee.jobPosition,
    };

    return (
      // Карточка остаётся контейнером для встроенного режима редактирования.
      <Card>
        {/* Передаём форме id для обновления, текущие значения и обработчик отмены. */}
        <CreateEmployeeForm
          employeeId={employee.id}
          initialValues={initialValues}
          onCancel={() => setIsEditing(false)}
        />
      </Card>
    );
  }

  return (
    // В обычном режиме Card показывает данные и кнопки управления записью.
    <Card>
      {/* Верхняя часть содержит действие перехода в режим редактирования. */}
      <CardHeading>
        {/* Переключаем локальное состояние, чтобы отобразить форму. */}
        <EditButton type="button" onClick={() => setIsEditing(true)}>
          Edit
        </EditButton>
      </CardHeading>

      {/* dl связывает подписи полей dt с их значениями dd. */}
      <EmployeeDetails>
        {/* Подпись Name относится к следующему значению dd. */}
        <dt>Name</dt>
        {/* Выводим имя из объекта сотрудника. */}
        <dd>{employee.name}</dd>
        {/* Подпись фамилии. */}
        <dt>Surname</dt>
        {/* Выводим фамилию из объекта сотрудника. */}
        <dd>{employee.surname}</dd>
        {/* Подпись возраста. */}
        <dt>Age</dt>
        {/* Выводим возраст. */}
        <dd>{employee.age}</dd>
        {/* Подпись должности. */}
        <dt>Job position</dt>
        {/* Если должность не указали, показываем поясняющий текст. */}
        <dd>{employee.jobPosition || "Not specified"}</dd>
      </EmployeeDetails>

      {/* Нижняя зона содержит кнопку удаления карточки. */}
      <CardActions>
        {/* По нажатию Context удаляет сотрудника с его уникальным id. */}
        <DeleteButton
          type="button"
          onClick={() => deleteEmployee(employee.id)}
          aria-label={`Delete ${employee.name} ${employee.surname}`}
        >
          Delete
        </DeleteButton>
      </CardActions>
    </Card>
  );
}

// Экспорт нужен странице Employees для создания карточек через map.
export default EmployeeCard;
