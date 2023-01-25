import React from 'react';
import linkStyle from './link.module.scss';
import buttonStyle from './../button/button.module.scss';

export interface LinkProps {
  appearance?: 'light' | 'bold' | 'button';
  /** * Call to action */
  label: React.ReactNode | string;
  /** * Link to page */
  href?: string | undefined;
  target?: '_blank' | '_self' | '_parent' | '_top';
  size?: 'xs' | 'sm' | 'lg';
  /** * Optional click handler */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Link = ({
  appearance = 'bold',
  label = 'Link',
  href = '#',
  target = '_self',
  size = 'xs',
  onClick,
  ...props
}: LinkProps) => {
  const hasHref = href && href !== '#';
  const buttonUI = appearance === 'button';

  function clickHandler(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    onClick && onClick();
  }

  return (
    <a
      {...props}
      onClick={!hasHref ? clickHandler : undefined}
      href={href}
      target={hasHref ? target : undefined}
      className={`${
        buttonUI
          ? `${buttonStyle.button} ${buttonStyle.solid} ${buttonStyle[size]}`
          : `${linkStyle.link} ${linkStyle[appearance]} ${linkStyle[size]}`
      } 
       `}
    >
      {label}
    </a>
  );
};
