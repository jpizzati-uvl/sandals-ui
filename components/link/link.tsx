import React from 'react';
import style from './link.module.scss';

export interface LinkProps {
  theme?: 'default';
  /** * Call to action */
  label: string;
  /** * Change arrow icon color  */
  accent?: string;
  /** * Link to page */
  href?: string | undefined;
  target?: '_blank' | '_self' | '_parent' | '_top';
  size?: 'xs' | 'sm';
  /** * Optional click handler */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Link = ({
  theme = 'default',
  accent,
  label = 'Link',
  href = '#',
  target = '_self',
  size = 'xs',
  onClick,
  ...props
}: LinkProps) => {
  const clickHandler = (
    e: React.MouseEvent<HTMLAnchorElement>,
    clickAction: () => void
  ) => {
    e.preventDefault();
    clickAction();
  };

  return (
    <a
      {...props}
      onClick={onClick ? e => clickHandler(e, onClick) : undefined}
      href={href}
      target={onClick ? undefined : target}
      className={`${style.link} ${style[theme]} ${style[size]}`}
      // dangerouslySetInnerHTML={{ __html:  }}
    >
      {label} <i className="ic-link" style={{ color: accent }} />
    </a>
  );
};
