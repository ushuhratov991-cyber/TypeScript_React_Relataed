import styled from "@emotion/styled";

export const BlogManagementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: min(100%, 680px);
  padding: clamp(24px, 5vw, 40px);
  border: 1px solid #e4e7ec;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(16, 24, 40, 0.08);
`;

export const BlogManagementTitle = styled.p`
  margin: 0;
  color: #101828;
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: red
`;

export const BlogMessageInput = styled.textarea`
  width: 100%;
  min-height: 140px;
  padding: 16px;
  border: 1px solid #d0d5dd;
  border-radius: 12px;
  outline: none;
  background: #ffffff;
  color: #15803d;
  font: inherit;
  line-height: 1.6;
  transition: border-color 160ms ease, box-shadow 160ms ease;

  &::placeholder {
    color: #3977be;
  }

  &:focus {
    border-color: #16a34a;
    box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.12);
  }
`;
