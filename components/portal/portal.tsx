import React from 'react';
import { createPortal } from 'react-dom';
import usePortal from '../../utils/hooks/use-portal';

export interface PortalProps {
  children: React.ReactNode;
  id: string;
}

export const Portal = ({ id, children }: PortalProps) => {
  const target: HTMLDivElement = usePortal(id);

  return (
    <>
      {typeof document !== 'undefined' && target
        ? createPortal(children, target)
        : null}
    </>
  );
};
