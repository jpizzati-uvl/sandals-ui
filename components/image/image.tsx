import React, { useRef, useEffect } from 'react';
import usePrevious from '../../utils/hooks/use-previous';
import resolve from '../../utils/optimization/resolve';

export interface ImageProps {
  alt: string;
  /** Will render if image not found */
  fallback?: string;
  /** If true, must define height (in rems) in parent */
  responsive?: boolean | undefined;
  /** Use absolute url */
  src: string;
}

export interface ImageWrapperProps {
  responsive?: boolean;
  children: React.ReactNode;
}

const ImageWrapper = ({ children, responsive }: ImageWrapperProps) => {
  return responsive ? (
    <div className="absolute top-0 left-0 z-0 block h-full w-full overflow-hidden outline-none">
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};

/**
 * Primary UI component with no user interaction
 */
export const Image = ({ fallback, responsive, src, ...props }: ImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const prevSrc = usePrevious(src);
  const srcChanged = prevSrc !== src;

  const defaultStyles = 'h-auto w-auto max-w-full mx-auto';

  const responsiveStyles =
    'absolute top-2/4 left-2/4 block max-w-none h-full w-full -translate-x-2/4 -translate-y-2/4 border-none object-cover object-center';

  useEffect(() => {
    if (srcChanged) {
      resolve.optimizer?.updateImage(imgRef.current, false);
    }
  }, [src]);

  return (
    <ImageWrapper responsive={responsive}>
      <img
        {...props}
        className={`Resolve ${responsive ? responsiveStyles : defaultStyles}`}
        data-testid="image-ui"
        data-resolvechain={`set=fileName[${src}]&source=url[global.fileName],name[image],continueonerror[true]&set=prdImageFound[global.source.success]&source=url[${fallback}],name[base1],if[(! global.source.success)]&sink=if[(global.prdImageFound)]&sink=nocache[true],if[(! global.prdImageFound)]`}
        ref={imgRef}
        src="https://resolve.sandals.com/sri?blank=height[1],width[1],color[none]&sink=format[gif]"
      />
    </ImageWrapper>
  );
};
