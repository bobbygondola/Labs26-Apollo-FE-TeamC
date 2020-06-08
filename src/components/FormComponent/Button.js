import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      onClick={props.handleButtonClick}
      className={props.type || "primary"}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  handleButtonClick: PropTypes.func,
};
