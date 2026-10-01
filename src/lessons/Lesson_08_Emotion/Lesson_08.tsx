import Button from "components/Button/Button";

import { PageWrapper, Paragraph, ButtonControl } from "./styles";

function Lesson_08() {
  return (
    <PageWrapper>
      <Paragraph>Lesson 08</Paragraph>
      <ButtonControl>
        <Button name="Simple Button" />
      </ButtonControl>
      <ButtonControl>
        <Button
          name="Delete Button"
          isRed={true}
          onClick={() => console.log("It is delete buton")}
        />
      </ButtonControl>
      <ButtonControl>
        <Button
          name="Disabled Button"
          onClick={() => console.log("It is disabled buton")}
          disabled={true}
        />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Lesson_08;
