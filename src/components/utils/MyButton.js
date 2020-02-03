import React from "react";
import Button from "@material-ui/core/Button";
import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = props => {
  return (
    <div>
      <Button href={props.link} variant={props.variant} color={props.color}>
        <img className="icon_image" src={TicketIcon} alt="icon_button" />
        {props.text}
      </Button>
    </div>
  );
};

export default MyButton;
