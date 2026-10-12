import styled from "@emotion/styled";
import { SearchButton } from "../Home/styles";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 90px;

  @media (max-width: 600px) {
    padding-top: 60px;
  }
`;

export const DeleteAllButton = styled(SearchButton)`
  width: 100%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
