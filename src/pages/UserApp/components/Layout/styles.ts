import styled from "@emotion/styled";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  background-color: rgba(0, 10, 66, 0.9);
  padding: 20px 40px;
  color: white;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 40px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  border-top: 1px solid black;
  background-color: rgba(0, 10, 66, 0.9);
  padding: 20px 40px;
  color: white;
`;