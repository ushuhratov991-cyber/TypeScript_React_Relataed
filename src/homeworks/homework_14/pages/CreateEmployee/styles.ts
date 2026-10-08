import styled from "@emotion/styled";
export const PageWrapper = styled.section`
  display: flex;
  flex: 1;
  min-width: 0;
  justify-content: center;
  align-items: flex-start;
  padding: 118px 40px 80px;

  @media (max-width: 700px) {
    padding: 40px 20px;
  }
`;
