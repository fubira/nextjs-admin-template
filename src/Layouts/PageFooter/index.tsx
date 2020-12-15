import React, { useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { LayoutFooter } from '@paljs/ui/Layout';
import { Actions, ActionType } from '@paljs/ui/Actions';
import { Menu, MenuRefObject } from '@paljs/ui/Menu';
import { MenuItemType } from '@paljs/ui/types';
import Container from '@paljs/ui/Container';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';

import Copyright from '../../components/Copyright/index';

const PageFooterStyle = styled.div``;

const BlockStyle = styled.div`
  display: block;
  width: 100%;
`;

const FooterMenuStyle = styled.div`
  margin-bottom: 2em;
`;

const FooterInfoStyle = styled.div`
  display: flex;
  width: 100%;
  white-space: nowrap;
  justify-content: space-between;
  margin: 0 1rem;

  p {
    font-size: 0.75rem;
  }

  div {
    margin: auto 0;
  }

  .right > div {
    width: fit-content;
    margin-left: auto;
  }
  .left > div {
    width: fit-content;
    margin-right: 1rem;
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
    content: (
      <Link href="/company">
        <a>
          <p> 運営会社 </p>
        </a>
      </Link>
    ),
  },
  {
    content: (
      <Link href="/term">
        <a>
          <p> 利用規約 </p>
        </a>
      </Link>
    ),
  },
  {
    content: (
      <Link href="/privacy">
        <a>
          <p> プライバシー </p>
        </a>
      </Link>
    ),
  },
];

export interface PageFooterProps {
  className?: string;
}

const PageFooter: React.FC<PageFooterProps> = ({ className }) => {
  const menuRef = useRef<MenuRefObject>(null);

  return (
    <PageFooterStyle className={className}>
      <LayoutFooter>
        <BlockStyle>
          <FooterMenuStyle>
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
          </FooterMenuStyle>

          <FooterInfoStyle>
            <div className="left">
              <Copyright></Copyright>
            </div>
            <div className="right">
              <Actions nextJs Link={Link} size="Small" actions={actionItems} />
            </div>
          </FooterInfoStyle>
        </BlockStyle>
      </LayoutFooter>
    </PageFooterStyle>
  );
};
export default PageFooter;
