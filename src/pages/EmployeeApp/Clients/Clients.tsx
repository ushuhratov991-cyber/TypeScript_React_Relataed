import { useNavigate, Link } from "react-router-dom";

import Button from "components/Button/Button";

import { PageWrapper, ButtonControl } from "./styles";
import { ROUTES } from "constants/routes"; 


function Clients() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };


  return (
    <PageWrapper>
      <Link to={ROUTES.FACEBOOK}>Facebook</Link>
      <Link to={ROUTES.GOOGLE}>Google</Link>
      <Link to={ROUTES.MICRACOFT}>Microsoft</Link>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Clients; 
