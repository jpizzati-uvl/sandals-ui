import React from "react";
import style from "./button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className={style.default}>{props.label}</button>;
};

export default Button;
