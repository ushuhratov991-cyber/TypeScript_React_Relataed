import styled from "@emotion/styled";

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px;
  border: 1px solid #eaecf0;
  border-radius: 12px;
  background: #ffffff;
`;

export const MessageTitle = styled.p`
  margin: 0 0 4px;
  color: #4a1c69;
  font-size: 22px;
  font-weight: 650;
  line-height: 1.4;
`;

export const MessageInfo = styled.p`
  margin: 0;
  color: #ff1952;
  font-size: 20px;
  line-height: 1.6;
`;
