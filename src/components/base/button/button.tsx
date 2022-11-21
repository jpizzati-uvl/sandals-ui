import React from "react";
import "./button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="xs-12 xs-fs12">{props.label}</button>;
};

export default Button;
