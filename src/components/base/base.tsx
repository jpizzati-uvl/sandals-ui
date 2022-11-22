import React from "react";
import "./base.scss";

export interface BaseProps {
  children: object;
}

const Base = (props: BaseProps) => {
  return <>{props.children}</>;
};

export default Base;
