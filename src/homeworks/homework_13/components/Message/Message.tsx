import { useContext } from "react";

import { MainContext } from "homeworks/homework_13/components/BlogManagement/BlogManagement";

import { MessageWrapper, MessageTitle, MessageInfo } from "./styles";

function Message() {
  const { postedMessage } = useContext(MainContext);

  return (
    <MessageWrapper>
      <MessageTitle>Message</MessageTitle>

      <MessageInfo>
        {postedMessage || "Your posted Message will apear here."}
      </MessageInfo>

    </MessageWrapper>
  );
}

export default Message;
