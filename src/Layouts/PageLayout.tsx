import React, { useState, useEffect, Fragment } from 'react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';

import { Layout, LayoutContent, LayoutContainer, LayoutColumns, LayoutColumn } from '@paljs/ui/Layout';
import icons from '@paljs/icons';

import themes from 'themes';
import BaseStyle from './BaseStyle';
import HtmlHead from './HtmlHead';
import StickyHeader from './StickyHeader';
import PageFooter from './PageFooter';

const getDefaultTheme = (): DefaultTheme['name'] => {
  return localStorage.getItem('theme') as DefaultTheme['name'];
};

const IE11FlexIsNotKnownMinHeihgtContentSizeBugFixWrapperStyle = styled.div`
  display: flex;
`;

export interface PageLayoutProps {
  description?: string;
  title: string;
}

const LayoutPage: React.FC<PageLayoutProps> = ({ children, title, description }) => {
  const [theme, setTheme] = useState<DefaultTheme['name']>('default');

  useEffect(() => {
    const localTheme = getDefaultTheme();
    if (localTheme !== theme && theme === 'default') {
      setTheme(localTheme);
    }
  }, []);

  return (
    <Fragment>
      <HtmlHead title={title} description={description} />
      <ThemeProvider theme={themes(theme)}>
        <Fragment>
          <BaseStyle />
          <Layout evaIcons={icons}>
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
