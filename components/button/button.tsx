import React from 'react';
import style from './button.module.scss';

export interface ButtonProps {
  /** * "true", "false" */
  disabled?: boolean;
  theme?: 'default' | 'outline';
  /** * Change background or border color  */
  accent?: string;
  /** * Call to action */
  label: string;
  size?: 'xs' | 'sm' | 'lg';
  /** * Optional click handler */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  disabled = false,
  theme = 'default',
  accent,
  label,
  size = 'xs',
  onClick,
  ...props
}: ButtonProps) => {
  const customStyles =
    theme === 'outline'
      ? { borderColor: `${accent}`, color: `${accent}` }
      : { background: `${accent}` };

  return (
    <button
      {...props}
      disabled={disabled}
      onClick={onClick}
      style={customStyles}
      className={`${style.button} ${style[theme]} ${style[size]} ${
        disabled ? style.disabled : null
      }`}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  );
};
