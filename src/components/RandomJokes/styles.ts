import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.li`
  font-size: 20px;
  color: black;
`;
export const ErrorText = styled.p`
  font-size: 20px;
  color: black;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  width: 600px;
  min-height: 400px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

export const JokesContainer = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const JokeWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const ButtonControl = styled.div`
  min-width: 150px;
  max-width: 150px;
`;
