import React from 'react';
import style from './button.module.scss';

export interface ButtonProps {
  appearance?: 'solid' | 'outline';
  /** * "true", "false" */
  disabled?: boolean;
  /** * Call to action */
  label: React.ReactNode | string;
  size?: 'xs' | 'sm' | 'lg';
  /** * Optional click handler */
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  appearance = 'solid',
  disabled = false,
  label,
  size = 'xs',
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      onClick={onClick}
      className={`${style.button} ${style[appearance]} ${style[size]}`}
    >
      {label}
    </button>
  );
};
