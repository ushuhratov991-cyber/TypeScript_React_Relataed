// Employee содержит типы данных и уникальный id карточки.
import { type Employee } from "../../types";

// EmployeeCardProps описывает обязательные входные данные карточки.
export interface EmployeeCardProps {
  employee: Employee; // Одна запись, которую нужно показать и которой можно управлять.
}
