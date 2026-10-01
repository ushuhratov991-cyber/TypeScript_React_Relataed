import { useNavigate, Link } from "react-router-dom";

import Button from "components/Button/Button";

import { PageWrapper, ButtonControl } from "./styles";

function Clients() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };


  return (
    <PageWrapper>
      <Link to="/clients/facebook">Facebook</Link>
      <Link to="/clients/google">Google</Link>
      <Link to="/clients/microsoft">Microsoft</Link>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Clients; 
