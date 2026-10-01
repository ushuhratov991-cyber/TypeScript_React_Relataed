export interface ButtonProps {
  name: string;
  isRed?: boolean;
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
}
