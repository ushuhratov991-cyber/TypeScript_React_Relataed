import Input from "./Input";
import { InputsList } from "./styles";

function InputExamples() {
  return (
    <InputsList>
      <Input
        id="default-input"
        name="defaultInput"
        type="text"
        label="Default input"
        placeholder="Enter text"
      />
      <Input
        id="disabled-input"
        name="disabledInput"
        type="text"
        label="Disabled input"
        placeholder="You cannot enter text"
        disabled={true}
      />
      <Input
        id="error-input"
        name="errorInput"
        type="text"
        label="Input with error"
        placeholder="Enter text"
        error="Some error"
      />
      <Input
        id="disabled-error-input"
        name="disabledErrorInput"
        type="text"
        label="Disabled input with error"
        placeholder="You cannot enter text"
        disabled={true}
        error="Some error"
      />
    </InputsList>
  );
}

export default InputExamples;
