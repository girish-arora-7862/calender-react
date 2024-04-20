import React from "react";
import "./index.css";
import { ButtonProps } from "../../@types/Button";

const Button = ({
  text,
  type = "default",
  isDisabled = false,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <div
      className={`Button ${type === "text" && "Button_text"} ${
        isDisabled && "disabled"
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
