import { useFormik } from "formik"; 
import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LoginFormContainer, Title, InputsContainer } from "./styles";

import * as Yup from "yup"; 


const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email field is required"),
});

function LoginForm() {
  // Шаг 2: создаем state для храния информации, которую пользователь вводит в элемент input
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // // Шаг 3: СОздаем функцию, которая будет ловить данные с клавиатуры которые ввел пользоваетль и класть их в state
  // const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };

  // const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  // const login = (event: any) => {
  //   event.preventDefault();
  //   console.log("Email: ", email);
  //   console.log("Password: ", password);
  // };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email field is required")
      .email("This field should be in email format"),
    password: Yup.string()
      .required("Passwod field is required")
      .min(5, "Password field should contain min 5 characters")
      .max(15, "Password field should contain max 20 characters"),
  });

    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: () => {},
    });

  return (
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormContainer>
  );
}

export default LoginForm;
