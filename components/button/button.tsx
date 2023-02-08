import React from 'react';
// import style from './button.module.scss';

export interface ButtonProps {
  /** Required if no label is present e.g. menu */
  'aria-label'?: string;
  /** CTA; only inline elements  */
  children?: React.ReactNode | string;
  /**  "true", "false" */
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  /**  Event handler */
  onPress: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  disabled = false,
  type = 'button',
  onPress,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      data-testid="button-ui"
      disabled={disabled}
      className="block w-full"
      onClick={onPress}
      type={type}
    >
      {children}
    </button>
  );
};
