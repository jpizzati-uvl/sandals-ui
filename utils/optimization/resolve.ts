interface ResolveInterface {
  optimizer?: {
    // eslint-disable-next-line no-unused-vars
    updateImage: (element: HTMLImageElement | null, force: boolean) => void;
  };
}
const resolve: ResolveInterface = {};

if (typeof window !== 'undefined') {
  const resolveScript = document.createElement('script');

  resolveScript.defer = true;
  resolveScript.type = 'text/javascript';
  resolveScript.src =
    'https://resolve.sandals.com/zap/dhtml/com.liquidpixels.Resolve.jsr';
  document.head.appendChild(resolveScript);

  resolveScript.onload = () => {
    (() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      // eslint-disable-next-line no-undef
      resolve.optimizer = new com.liquidpixels.Resolve({
        server: 'resolve.sandals.com',
        uri: 'sri',
        port: '80',
        base: 'https://',
        imageFit: 'containerWidth',
        lazyLoad: true,
        advancedOptions: {
          cacheThreshold: 500,
        },

        output: (
          browser: string,
          image: {
            format: string;
          }
        ) => {
          return {
            format: ['webp', image.format ? image.format : 'jpg'],
          };
        },
      });
    })();
  };
}

export default resolve;
