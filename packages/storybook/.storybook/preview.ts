import theme from './theme';
import { Preview } from '@storybook/react';
import formatCode from './utils/formatCode';
import { themes } from '@storybook/theming';

import './style.scss';

const commonTheme = {
  brandTitle: 'MyraUI',
  brandUrl: 'https://github.com/gitaumoses4/myraui',
  brandTarget: '_self',
};

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true },
    actions: { argTypesRegex: '^on.*' },
    docs: {
      source: {
        transform: formatCode,
      },
      theme,
    },
    darkMode: {
      current: 'dark',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
      dark: {
        ...themes.dark,
        ...commonTheme,
        appBorderRadius: 14,
        brandImage: '/images/logo/dark-logo.svg',
      },
      light: {
        ...themes.light,
        ...commonTheme,
        appBorderRadius: 14,
        brandImage: '/images/logo/light-logo.svg',
      },
    },
    options: {
      storySort: {},
    },
  },
};

export default preview;
