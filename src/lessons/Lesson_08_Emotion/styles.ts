import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  gap: 20px;
  padding: 40px;
`;

export const Paragraph = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: red;

  &:hover {
    color: rgba(141, 0, 0, 1);
  }
`;

export const ButtonControl = styled.div`
  width: 300px;
`;
