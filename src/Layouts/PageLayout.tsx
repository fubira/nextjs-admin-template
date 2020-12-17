import React, { useState, useEffect, Fragment } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Layout, LayoutContent, LayoutContainer, LayoutColumns, LayoutColumn } from '@paljs/ui/Layout';
import icons from '@paljs/icons';
import { useRouter } from 'next/router';

import themes from '../themes';
import StickyHeader from './StickyHeader';
import HtmlHead, { HtmlHeadProps } from './HtmlHead';
import BaseStyle from './BaseStyle';
import PageFooter from './PageFooter';
import styled from 'styled-components';

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

  const IE11FlexIsNotKnownMinHeihgtContentSizeBugFixWrapperStyle = styled.div`
    display: flex;
  `;

  return (
    <Fragment>
      <HtmlHead {...rest} />
      <ThemeProvider theme={themes(theme)}>
        <Fragment>
          <BaseStyle />
          <Layout evaIcons={icons} className={!authLayout ? 'auth-layout' : ''}>
            <StickyHeader />
            <LayoutContainer>
              <LayoutContent>
                <IE11FlexIsNotKnownMinHeihgtContentSizeBugFixWrapperStyle>
                  <LayoutColumns>
                    <LayoutColumn className="main-content">{children}</LayoutColumn>
                  </LayoutColumns>
                </IE11FlexIsNotKnownMinHeihgtContentSizeBugFixWrapperStyle>
                <PageFooter />
              </LayoutContent>
            </LayoutContainer>
          </Layout>
        </Fragment>
      </ThemeProvider>
    </Fragment>
  );
};

export default LayoutPage;
