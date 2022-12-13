import React from "react";
import "../../styles/master.scss";

export interface BaseProps {
  children: object;
}

export const Base = (props: BaseProps) => {
  return <>{props.children}</>;
};
