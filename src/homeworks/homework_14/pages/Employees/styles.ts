import styled from "@emotion/styled";
export const PageWrapper = styled.section`
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  align-items: center;
  gap: 125px;
  padding: 84px 50px 54px 55px;

  @media (max-width: 700px) {
    gap: 40px;
    padding: 40px 20px;
  }
`;
export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 65px;

  @media (max-width: 700px) {
    gap: 24px;
  }
`;
export const ButtonControl = styled.div`
  width: 700px;
  max-width: 100%;

  button {
    width: 100%;
    border-radius: 4px;
    background: #d40000;
    font-weight: 600;
    line-height: 30px;

    &:hover {
      background: #b30000;
    }

    &:focus-visible {
      outline: 2px solid #d40000;
      outline-offset: 3px;
    }
  }
`;
export const EmptyText = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
`;
