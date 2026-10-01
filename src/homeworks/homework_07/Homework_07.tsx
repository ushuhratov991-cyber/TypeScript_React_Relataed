import { useState } from "react";

import Card from "components/Card/Card";
import Feedback from "components/Feedback/Feedback";
import "./styles.css";

function Homework_07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = () => {
    setLike((prevValue: number) => prevValue + 1);
  };

  const onDislike = () => {
    setDislike((prevValue: number) => prevValue + 1);
  };

  const resetResults = () => {
    setLike(0);
    setDislike(0);
  };

  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Security Specialist",
    hobby: "Bear, TV, FastFood",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  return (
    <div className="lesson_07_page_wrapper">
      <Feedback
        like={like}
        dislike={dislike}
        onDislike={onDislike}
        onLike={onLike}
        resetResults={resetResults}
      />
      <Card
        firstName={homerSimpson.firstName}
        lastName={homerSimpson.lastName}
        avatar={homerSimpson.avatarURL}
        job={homerSimpson.job}
        hobby={homerSimpson.hobby}
      />
    </div>
  );
}

export default Homework_07;
