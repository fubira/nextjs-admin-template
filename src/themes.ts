import { createTheme } from '@paljs/theme';
import { DefaultTheme } from 'styled-components';

const shared: Partial<DefaultTheme> = {
  headerPadding: '1rem',
  headerHeight: '4rem',
  sidebarHeaderGap: '1rem',
  footerPadding: '1rem',
  textParagraphLineHeight: '1.4rem',
  fontFamilyPrimary: `-apple-system, BlinkMacSystemFont,
          "Open Sans", "Helvetica Neue", Arial, sans-serif,
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
