import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding-top: 120px;

  @media (max-width: 600px) {
    gap: 60px;
    padding-top: 60px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const CityInput = styled.div`
  flex: 1;
  min-width: 0;

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
  }

  input {
    height: 48px;
    padding: 12px 20px;
    border: 1px solid white;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-family: inherit;
    font-size: 20px;
    font-weight: 500;
    backdrop-filter: blur(8.9px);

    &::placeholder {
      color: white;
      font-weight: 400;
    }

    &:focus-visible {
      outline: 2px solid white;
      outline-offset: 3px;
    }
  }
`;

export const SearchButton = styled.div`
  width: 145px;

  button {
    height: 48px;
    border-radius: 50px;
    background: #3678b4;
    font-family: inherit;
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      background: #28649a;
    }

    &:disabled {
      background: #60778c;
      cursor: default;
    }

    &:focus-visible {
      outline: 2px solid white;
      outline-offset: 3px;
    }
  }

  @media (max-width: 600px) {
    width: 100px;
  }
`;

export const ErrorTitle = styled.p`
  color: #e34d4d;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
`;

export const ErrorText = styled.p`
  min-height: 68px;
  padding: 10px 0 20px;
  text-align: center;
  font-size: 18px;
  overflow-wrap: anywhere;
`;
