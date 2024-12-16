import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/index.css';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light-theme',
        dark: 'dark-theme',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
