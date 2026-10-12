import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";

//Homeworks
// import Homework_14 from "homeworks/homework_14/Homework_14";

//Projects: 
import React_Final_Project from "./React_Final_Project/React_Final_Project";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Homework_14 /> */}
      <React_Final_Project />
    </BrowserRouter>
  );
}

export default App;
