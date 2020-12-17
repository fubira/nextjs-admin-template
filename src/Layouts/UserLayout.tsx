import React, { useState, useRef, useEffect, Fragment } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import themes from '../themes';
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutFooter,
  LayoutContainer,
  LayoutColumns,
  LayoutColumn,
} from '@paljs/ui/Layout';
import icons from '@paljs/icons';
import { SidebarBody, SidebarRefObject, Sidebar } from '@paljs/ui/Sidebar';
import BaseStyle from './BaseStyle';
import { useRouter } from 'next/router';
import { EvaIcon } from '@paljs/ui/Icon';
import { Button } from '@paljs/ui/Button';
import { Menu, MenuRefObject } from '@paljs/ui/Menu';
import Link from 'next/link';
import menuItems from '../menuItem';
import HtmlHead, { HtmlHeadProps } from './HtmlHead';
import StickyHeader from '../components/header/StickyHeader';
import PageFooter from '../components/footer/PageFooter';

const getDefaultTheme = (): DefaultTheme['name'] => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as DefaultTheme['name'];
  } else {
    const hours = new Date().getHours();
    return hours > 6 && hours < 19 ? 'default' : 'dark';
  }
};

const LayoutPage: React.FC<HtmlHeadProps> = ({ children, ...rest }) => {
  const [theme, setTheme] = useState<DefaultTheme['name']>('default');
  const sidebarRef = useRef<SidebarRefObject>(null);
  const router = useRouter();
  const [menuState, setMenuState] = useState(false);
  const menuRef = useRef<MenuRefObject>(null);
  const [seeHeader, setSeeHeader] = useState(true);

  const getState = (state?: 'hidden' | 'visible' | 'compacted' | 'expanded') => {
    setSeeHeader(state !== 'compacted');
  };

  useEffect(() => {
    const localTheme = getDefaultTheme();
    if (localTheme !== theme && theme === 'default') {
      setTheme(localTheme);
    }
  }, []);

  const authLayout = router.pathname.startsWith('/auth');

  return (
    <Fragment>
      <HtmlHead {...rest} />
      <ThemeProvider theme={themes(theme)}>
        <Fragment>
          <BaseStyle />
          <Layout evaIcons={icons} className={!authLayout ? 'auth-layout' : ''}>
            <LayoutHeader>
              <StickyHeader />
            </LayoutHeader>
            <LayoutContainer>
              {!authLayout && (
                <Sidebar
                  getState={getState}
                  ref={sidebarRef}
                  property="start"
                  containerFixed
                  responsive
                  className="menu-sidebar"
                >
                  {seeHeader && (
                    <header>
                      <Button
                        size="Tiny"
                        status="Primary"
                        onClick={() => {
                          setMenuState(!menuState);
                          menuRef.current?.toggle();
                        }}
                        fullWidth
                      >
                        {menuState ? <EvaIcon name="arrow-circle-up" /> : <EvaIcon name="arrow-circle-down" />}
                      </Button>
                    </header>
                  )}
                  <SidebarBody>
                    <Menu
                      nextJs
                      className="sidebar-menu"
                      Link={Link}
                      ref={menuRef}
                      items={menuItems}
                      currentPath={router.pathname}
                      toggleSidebar={() => sidebarRef.current?.hide()}
                    />
                  </SidebarBody>
                </Sidebar>
              )}
              <LayoutContent>
                <LayoutColumns>
                  <LayoutColumn className="main-content">{children}</LayoutColumn>
                </LayoutColumns>
                <LayoutFooter>
                  <PageFooter>PageFooter</PageFooter>
                </LayoutFooter>
              </LayoutContent>
            </LayoutContainer>
          </Layout>
        </Fragment>
      </ThemeProvider>
    </Fragment>
  );
};

export default LayoutPage;
