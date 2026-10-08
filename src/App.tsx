import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Homework_14 from "homeworks/homework_14/Homework_14";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Homework_14 />
    </BrowserRouter>
  );
}

export default App;
