import { useState, createContext } from "react";
import Button from "components/Button/Button";

import Card from "homeworks/homework_13/components/Card/Card";

import {
  BlogManagementWrapper,
  BlogManagementTitle,
  BlogMessageInput,
} from "./styles";
import { type UserData, type MainContextData } from "./types";

export const MainContext = createContext<MainContextData>({
  postedMessage: "",
});

function BlogManagement() {
  const [draftMessage, setDraftMessage] = useState("");
  const [postedMessage, setPostedMessage] = useState("");

  const handlePost = () => {
    setPostedMessage(draftMessage.trim());
  };
  return (
    <MainContext.Provider value={{ postedMessage }}>
      <BlogManagementWrapper>
        <BlogManagementTitle>My Blog</BlogManagementTitle>

        <BlogMessageInput
          value={draftMessage}
          onChange={(event) => setDraftMessage(event.target.value)}
          placeholder="Write your Message..."
          rows={5}
        />

        <Button name="Запостить" onClick={handlePost} />

        <Card />
      </BlogManagementWrapper>
    </MainContext.Provider>
  );
}

export default BlogManagement;
