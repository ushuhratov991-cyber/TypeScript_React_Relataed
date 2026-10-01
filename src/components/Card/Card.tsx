import "./styles.css";
import Button from "components/Button/Button";

import {type CardProps} from "./types";
function Card( {firstName, lastName, job, hobby, avatar}: CardProps ) {
  // const { firstName, lastName, job, hobby, avatar } = props;

  return (
    <div className="card">
      <img className="avatar" src={avatar} alt="User Avatar" />
      <div className="card_info">
        <span className="info_title">Fullname: </span>
        <p>{`${firstName} ${lastName}`}</p>
      </div>
      <div className="card_info">
        <span className="info_title"> Job: </span>
        <p>{job}</p>
      </div>
      <div className="card_info">
        <span className="info_title">Hobby: </span>
        <p>{hobby}</p>
      </div>
      <Button name= "Get User Info"/>
    </div>
  );
}
export default Card;
