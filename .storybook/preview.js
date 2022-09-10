import { ThemeProvider } from 'styled-components';
import { Default, Dark } from '../themes/index';

import { Reset } from 'styled-reset';
import GlobalStyle from '../components/globalstyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Default}>
      <Story />
      <Reset />
      <GlobalStyle />
    </ThemeProvider>
  ),
];
