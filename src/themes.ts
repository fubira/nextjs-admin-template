import { createTheme } from '@paljs/theme';
import { DefaultTheme } from 'styled-components';

const shared: Partial<DefaultTheme> = {
  headerPadding: '2rem 3rem',
  headerHeight: '4rem',
  sidebarHeaderGap: '1rem',
  fontFamilyPrimary: `-apple-system, BlinkMacSystemFont,
          "Helvetica Neue", Arial, sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji","Segoe UI Symbol"`,
  actionsDividerWidth: '0',
};

export default function themeService(theme: DefaultTheme['name'], dir: 'ltr' | 'rtl' = 'ltr') {
  switch (theme) {
    case 'dark':
    case 'cosmic':
    case 'corporate':
    default:
      return createTheme(theme, { dir, ...shared });
  }
}
