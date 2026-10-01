import styled from "@emotion/styled";

interface InputComponentStylesProps {
  $error: string | undefined;
}

const generateInputColor = (error: string | undefined, disabled?: boolean) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (error) {
      return "#ff6868ff";
    } else {
      return "#3f3f3f";
    }
  }
};

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled.input<InputComponentStylesProps>`
  width: 100%;
  height: 50px;
  border: 1px solid
    ${({ $error, disabled }) => generateInputColor($error, disabled)};
  border-radius: 4px;
  padding: 12px;
  outline: none;

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;

export const ErrorText = styled.div`
  font-size: 16px;
  color: #ff6868ff;
`;
