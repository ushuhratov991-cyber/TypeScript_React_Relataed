import {Route, Routes, BrowserRouter}  from "react-router-dom"

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";

//Pages
import Home from "pages/EmployeeApp/Home/Home";
import About from "pages/EmployeeApp/About/About";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
import Clients from "pages/EmployeeApp/Clients/Clients";
import Facebook from "pages/EmployeeApp/Clients/Facebook/Facebook";
import Google from "pages/EmployeeApp/Clients/Google/Google";
import Microsoft from "pages/EmployeeApp/Clients/Microsoft/Microsoft";



//Lessons
import Lesson_06 from "lessons/Lesson_06_TypeScript/Lesson_06";
import Lesson_07 from "lessons/Lesson_07_TypeScript/Lesson_07";
import Lesson_07_Practise from "lessons/Lesson_07_Practice/Lesson_07_Practise";
import Lesson_08 from "lessons/Lesson_08_Emotion/Lesson_08";
import Lesson_09 from "lessons/Lesson_09_useEffect/Lesson_09";
import Lesson_10 from "lessons/Lesson_10_Formik/Lesson_10";
import Lesson_11 from "lessons/University_Project/Mikhail's_Project/Lesson_11";

//Hiomerks 
import Homework_07 from "homeworks/homework_07/Homework_07";
import Homework_09 from "homeworks/homework_09/Homework_09";
import Homework_10 from "homeworks/homework_10/Homework_10";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/facebook" element={<Facebook />} />
          <Route path="/clients/google" element={<Google />} />
          <Route path="/clients/microsoft" element={<Microsoft />} />
        </Routes>
        {/* <Home /> */}

        {/* Lessons */}
        {/* <Lesson_06 /> */}
        {/* <Lesson_07 /> */}
        {/* <Lesson_08 /> */}
        {/* <Lesson_09 /> */}
        {/* <Lesson_10/> */}
        {/* <Lesson_11/> */}


        {/* Homeworks*/}
        {/* <Homework_07 /> */}
        {/* <Homework_09 /> */}
        {/* <Homework_10 /> */}
      </Layout>
    </BrowserRouter>
  );
}
export default App;
