import { ButtonComponent } from "./styles";
import { type ButtonProps } from "./types";

function Button({
  name,
  type = "button",
  onClick = () => {},
  isRed = false,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      disabled={disabled}
      $isRed={isRed}
      onClick={onClick}
      type={type}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
