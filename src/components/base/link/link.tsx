import React from "react";
import style from "./link.module.scss";

export interface LinkProps {
  /*** Support multiple styles i.e. weddings */
  theme?: string;
  /*** Call to action */
  label: string;
  /*** Link to page, # if trigger */
  href: string;
  /*** Different sized buttons */
  size?: string;
  /*** Optional click handler */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Link = ({
  theme = "default",
  label,
  href,
  size = "xs",
  onClick,
  ...props
}: LinkProps) => {
  return (
    <a {...props} className={`${style[theme]} ${style[size]}`}>
      {label}
    </a>
  );
};
