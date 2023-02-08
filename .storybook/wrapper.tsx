import React from 'react';

export interface WrapperProps {
  className?: string;
  children: React.ReactNode;
  style?: object;
}

const Wrapper = ({ className = 'w-full', children }: WrapperProps) => {
  return (
    <div className="container">
      <div className={className}>{children}</div>
    </div>
  );
};

export default Wrapper;
