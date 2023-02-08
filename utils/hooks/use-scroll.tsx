import { useEffect } from 'react';

const useScroll = (disabled: boolean) => {
  useEffect(() => {
    if (disabled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [disabled]);
};

export default useScroll;
