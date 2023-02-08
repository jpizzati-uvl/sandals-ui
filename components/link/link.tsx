import React from 'react';

export interface LinkProps {
  /** Required if no label is present e.g. menu */
  'aria-label'?: string;
  /** CTA; only inline elements  */
  children?: React.ReactNode | string;
  /**  Not required if used as button */
  href: string;
  target?: 'blank' | 'self';
  /**  Optional handler */
  onPress?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Link = ({
  children,
  href = '#',
  onPress,
  target = 'self',
  ...props
}: LinkProps) => {
  const hasHref = href && href !== '#';

  function pressHandler(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    onPress && onPress();
  }

  return (
    <a
      {...props}
      data-testid="link-ui"
      href={href}
      onClick={!hasHref ? pressHandler : undefined}
      target={hasHref ? `_${target}` : undefined}
    >
      {children}
    </a>
  );
};
