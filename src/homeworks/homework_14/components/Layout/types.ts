// ReactNode — тип любого допустимого содержимого, которое может вложить родитель.
import { type ReactNode } from "react";

// LayoutProps описывает входные параметры общего макета приложения.
export interface LayoutProps {
  children: ReactNode; // children — страницы, которые Layout показывает внутри Main.
}
