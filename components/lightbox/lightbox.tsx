import React, { useRef } from 'react';
import useScroll from '../../utils/hooks/use-scroll';
import Portal from '../portal';
import helpers from '../../utils/helpers';

export interface LightboxProps {
  children: React.ReactNode;
  handler: () => void;
  visible: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Lightbox = ({
  children,
  handler,
  visible,
  ...props
}: LightboxProps) => {
  useScroll(visible);
  const portalId = helpers.id();
  const backdropRef = useRef<HTMLDivElement>(null);

  function lightboxHandler(event: React.MouseEvent<HTMLElement>) {
    const isBackdropClick = backdropRef.current === event.target;

    if (isBackdropClick) {
      handler();
    }
  }

  return (
    <Portal id={portalId}>
      {visible ? (
        <>
          <div
            {...props}
            className="absolute bottom-0 left-0 right-0 top-0 z-0 h-screen w-screen bg-black/80"
            data-testid="lightbox-ui"
            onClick={lightboxHandler}
            role="presentation"
            ref={backdropRef}
          />

          <div className="absolute left-2/4 top-2/4 z-10 w-full -translate-y-2/4 -translate-x-2/4">
            {children}
          </div>
        </>
      ) : (
        <></>
      )}
    </Portal>
  );
};
