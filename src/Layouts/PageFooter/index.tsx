import React, { useRef } from 'react';
import styled from 'styled-components';
import { LayoutFooter } from '@paljs/ui/Layout';
import Container from '@paljs/ui/Container';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import { MenuItemType } from '@paljs/ui/types';
import { Menu, MenuRefObject } from '@paljs/ui/Menu';
import Link from 'next/link';
import { Actions, ActionType } from '@paljs/ui/Actions';
import { breakpointDown, ifWidthInBreakpoint } from '@paljs/ui/breakpoints';

const PageFooterStyle = styled.div``;

const BlockStyle = styled.div`
  display: block;
  width: 100%;
`;

const MenuStyle = styled.div`
  margin-bottom: 3em;
`;

const FooterStyle = styled.div`
  display: flex;
  width: 100%;
  white-space: nowrap;
  justify-content: space-between;

  p {
    font-size: 0.85rem;
  }

  .right > div {
    align-content: center;
  }
  .left > div {
    align-content: center;
  }
`;

const leftMenuItems: MenuItemType[] = [
  {
    title: 'キーワードで探す',
    link: { href: '/help' },
  },
  {
    title: 'タグで探す',
    link: { href: '/form' },
  },
  {
    title: '達成間近',
    link: { href: '/form' },
  },
];

const centerMenuItems: MenuItemType[] = [
  {
    title: 'ヘルプ',
    link: { href: '/help' },
  },
  {
    title: 'お問い合わせ',
    link: { href: '/form' },
  },
];

const rightMenuItems: MenuItemType[] = [
  {
    title: 'About Us',
    link: { href: '/aboutus' },
  },
  {
    title: 'テスト1',
    link: { href: '/form' },
  },
  {
    title: 'テスト2',
    link: { href: '/form' },
  },
  {
    title: 'テスト3',
    link: { href: '/form' },
  },
];

const actionItems: ActionType[] = [
  {
    link: { href: '/about' },
    content: <p> 運営会社 </p>,
  },
  {
    link: { href: '/term' },
    content: <p> 利用規約 </p>,
  },
  {
    link: { href: '/privacy' },
    content: <p> プライバシー </p>,
  },
];

const PageFooter: React.FC<unknown> = () => {
  const menuRef = useRef<MenuRefObject>(null);

  return (
    <PageFooterStyle>
      <LayoutFooter>
        <BlockStyle>
          <MenuStyle>
            <Container fluid>
              <Row>
                <Col breakPoint={{ xs: 12, sm: 4, md: 4 }}>
                  <Menu nextJs ref={menuRef} Link={Link} currentPath="/" items={leftMenuItems} />
                </Col>
                <Col breakPoint={{ xs: 12, sm: 4, md: 4 }}>
                  <Menu nextJs ref={menuRef} Link={Link} currentPath="/" items={centerMenuItems} />
                </Col>
                <Col breakPoint={{ xs: 12, sm: 4, md: 4 }}>
                  <Menu nextJs ref={menuRef} Link={Link} currentPath="/" items={rightMenuItems} />
                </Col>
              </Row>
            </Container>
          </MenuStyle>

          <FooterStyle>
            <Container fluid>
              <Row reverse={ifWidthInBreakpoint(['xs', 'is'])}>
                <Col first breakPoint={{ xs: 12, sm: 6, md: 6 }}>
                  <p>&copy; CODEARTS 2020</p>
                </Col>
                <Col last breakPoint={{ xs: 12, sm: 6, md: 6 }}>
                  <Actions className="right" Link={Link} size="Small" actions={actionItems} />
                </Col>
              </Row>
            </Container>
          </FooterStyle>
        </BlockStyle>
      </LayoutFooter>
    </PageFooterStyle>
  );
};
export default PageFooter;
