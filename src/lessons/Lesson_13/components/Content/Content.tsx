// ШАГ 4: Импортируем функцию хук useContext из библиотеки react
import { useContext } from "react";

// ШАГ 5: Импортируем созданный нами в компоненте Main контекст MainContext
import { MainContext } from "lessons/Lesson_13/components/Main/Main";

// import Button from "components/Button/Button";

import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";

function Content() {
  // ШАГ 6: Получить доступ к данным, хранящимся в контексте
  const { userData } = useContext(MainContext);

  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      {!!userData && (
        <>
          <ContentInfo>Fullname: {userData.fullName}</ContentInfo>
          <ContentInfo>Age: {userData.age}</ContentInfo>
          <ContentInfo>Job: {userData.jobPosition}</ContentInfo>
        </>
      )}
      {/* {userData === true ? (
        <>
          <ContentInfo>Fullname: {userData.fullName}</ContentInfo>
          <ContentInfo>Age: {userData.age}</ContentInfo>
          <ContentInfo>Job: {userData.jobPosition}</ContentInfo>
        </>
      ) : (
        <></>
      )} */}
      {/* <Button isRed name="Delete user" /> */}
    </ContentWrapper>
  );
}

export default Content;
