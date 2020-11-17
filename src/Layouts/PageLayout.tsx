import React, { useState, useEffect, Fragment } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import themes from './themes';
import { Layout, LayoutContent, LayoutContainer, LayoutColumns, LayoutColumn } from '@paljs/ui/Layout';
import icons from '@paljs/icons';
import Header from './Header';
import SimpleLayout from './SimpleLayout';
import { useRouter } from 'next/router';
import HtmlHead, { HtmlHeadProps } from 'components/HtmlHead';

const getDefaultTheme = (): DefaultTheme['name'] => {
  return localStorage.getItem('theme') as DefaultTheme['name'];
};

const LayoutPage: React.FC<HtmlHeadProps> = ({ children, ...rest }) => {
  const [theme, setTheme] = useState<DefaultTheme['name']>('default');

  useEffect(() => {
    const localTheme = getDefaultTheme();
    if (localTheme !== theme && theme === 'default') {
      setTheme(localTheme);
    }
  }, []);

  const router = useRouter();
  const authLayout = router.pathname.startsWith('/auth');

  return (
    <Fragment>
      <HtmlHead {...rest} />
      <ThemeProvider theme={themes(theme)}>
        <Fragment>
          <SimpleLayout />
          <Layout evaIcons={icons} className={!authLayout ? 'auth-layout' : ''}>
            <Header />
            <LayoutContainer>
              <LayoutContent>
                <LayoutColumns>
                  <LayoutColumn className="main-content">{children}</LayoutColumn>
                </LayoutColumns>
              </LayoutContent>
            </LayoutContainer>
          </Layout>
        </Fragment>
      </ThemeProvider>
    </Fragment>
  );
};

export default LayoutPage;
