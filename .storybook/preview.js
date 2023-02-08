import '!style-loader!css-loader!./index.css';
import './../styles/index.css';
import '../utils/optimization/resolve';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
