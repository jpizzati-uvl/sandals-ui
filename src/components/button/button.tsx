import React from 'react';
import style from './button.module.scss';

export interface ButtonProps {
  /** * Support multiple styles i.e. weddings */
  theme?: string;
  /** * Call to action */
  label: string;
  /** * Different sized buttons */
  size?: string;
  /** * Optional click handler */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export default function Button({
  theme = 'default',
  label,
  size = 'xs',
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${style[theme]} ${style[size]}`}
      {...props}
    >
      {label}
    </button>
  );
}
