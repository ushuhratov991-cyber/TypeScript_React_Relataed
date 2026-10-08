import styled from "@emotion/styled";
export const EmployeeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 590px;
  max-width: 100%;
  padding: 60px;
  border-radius: 4px;
  background: #ffffff;

  label {
    color: #6f6f6f;
    line-height: 24px;
  }

  input {
    font-size: 16px;
    line-height: 24px;

    &::placeholder {
      color: #a3a3a3;
    }

    &:focus {
      outline: 2px solid #1f27f5;
      outline-offset: 2px;
    }
  }

  button {
    border-radius: 4px;
    background: #1f27f5;
    font-weight: 600;
    line-height: 30px;

    &:hover {
      background: #171dcc;
    }

    &:focus-visible {
      outline: 2px solid #1f27f5;
      outline-offset: 2px;
    }
  }

  @media (max-width: 600px) {
    padding: 28px;
  }
`;
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
