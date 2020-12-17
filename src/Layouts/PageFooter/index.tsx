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

import { breakpointDown } from '@paljs/ui/breakpoints';

const footerMenuItems: {
  left: MenuItemType[];
  center: MenuItemType[];
  right: MenuItemType[];
} = {
  left: [
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
  ],
  center: [
    {
      title: 'ヘルプ',
      link: { href: '/help' },
    },
    {
      title: 'お問い合わせ',
      link: { href: '/form' },
    },
  ],
  right: [
    {
      title: 'About Us',
      link: { href: '/aboutus' },
    },
  ],
};

const PageFooterStyle = styled.div``;

const BlockStyle = styled.div`
  display: block;
  width: 100%;
`;

const FooterInfoStyle = styled.div`
  display: flex;
  width: 100%;
  white-space: nowrap;
  margin: 0 1rem;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;

  ${breakpointDown('xs')`
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    `}

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

const FooterMenu: React.FC<{
  ref: React.RefObject<MenuRefObject> | null;
  link: any;
}> = ({ ref, link }) => {
  const FooterMenuStyle = styled.div`
    margin-bottom: 1.5em;

    .footer-menu {
      padding: 0.5em;
    }
  `;

  return (
    <FooterMenuStyle>
      <Container fluid>
        <Row>
          <Col breakPoint={{ xs: 12, sm: 4, md: 4 }}>
            <Menu className="footer-menu" nextJs ref={ref} Link={link} currentPath="/" items={footerMenuItems.left} />
          </Col>
          <Col breakPoint={{ xs: 12, sm: 4, md: 4 }}>
            <Menu className="footer-menu" nextJs ref={ref} Link={link} currentPath="/" items={footerMenuItems.center} />
          </Col>
          <Col breakPoint={{ xs: 12, sm: 4, md: 4 }}>
            <Menu className="footer-menu" nextJs ref={ref} Link={link} currentPath="/" items={footerMenuItems.right} />
          </Col>
        </Row>
      </Container>
    </FooterMenuStyle>
  );
};

const Copyright: React.FC = () => {
  const CopyrightStyle = styled.div`
    white-space: nowrap;
  `;

  return (
    <CopyrightStyle>
      <p>&copy; 2020 CODEARTS</p>
    </CopyrightStyle>
  );
};

export interface PageFooterProps {
  className?: string;
}

const PageFooter: React.FC<PageFooterProps> = ({ className }) => {
  const ref = useRef<MenuRefObject>(null);

  return (
    <PageFooterStyle className={className}>
      <LayoutFooter>
        <BlockStyle>
          <FooterMenu ref={ref} link={Link} />

          <FooterInfoStyle>
            <div className="right">
              <Actions nextJs Link={Link} size="Small" actions={actionItems} />
            </div>
            <div className="left">
              <Copyright />
            </div>
          </FooterInfoStyle>
        </BlockStyle>
      </LayoutFooter>
    </PageFooterStyle>
  );
};
export default PageFooter;
