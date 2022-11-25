import React from "react";
import style from "./button.module.scss";

export interface ButtonProps {
  /**
   * Call to action
   */
  label: string;
  /**
   * Optional specific styles
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${style.default} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};
