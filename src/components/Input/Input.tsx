import { type InputProps } from "./types";
import { InputWrapper, Label, InputComponent, ErrorText } from "./styles";

function Input({
  id,
  name,
  type,
  placeholder,
  label,
  error = undefined,
  disabled = false,
  onChange,
  value,
}: InputProps) {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputComponent
        disabled={disabled}
        $error={error}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {!!error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
}

export default Input;
