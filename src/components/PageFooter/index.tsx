import React, { useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { LayoutFooter } from '@paljs/ui/Layout';
import { Actions, ActionType } from '@paljs/ui/Actions';
import { Menu, MenuRefObject } from '@paljs/ui/Menu';
import { MenuItemType } from '@paljs/ui/types';
import { breakpointDown } from '@paljs/ui/breakpoints';
import Container from '@paljs/ui/Container';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';

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

const footerActionItems: ActionType[] = [
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

const FooterMenuStyle = styled.div`
  margin-bottom: 1.5em;

  .footer-menu-part {
    padding: 0.5em;
  }
`;

const FooterMenu: React.FC<{
  ref: React.RefObject<MenuRefObject> | null;
  link: any;
}> = ({ ref, link }) => {
  return (
    <FooterMenuStyle>
      <Container fluid>
        <Row>
          <Col breakPoint={{ xs: 12, sm: 4, md: 4 }}>
            <Menu
              nextJs
              className="footer-menu-part"
              ref={ref}
              Link={link}
              currentPath="/"
              items={footerMenuItems.left}
            />
          </Col>
          <Col breakPoint={{ xs: 12, sm: 4, md: 4 }}>
            <Menu
              nextJs
              className="footer-menu-part"
              ref={ref}
              Link={link}
              currentPath="/"
              items={footerMenuItems.center}
            />
          </Col>
          <Col breakPoint={{ xs: 12, sm: 4, md: 4 }}>
            <Menu
              nextJs
              className="footer-menu-part"
              ref={ref}
              Link={link}
              currentPath="/"
              items={footerMenuItems.right}
            />
          </Col>
        </Row>
      </Container>
    </FooterMenuStyle>
  );
};

const FooterActionStyle = styled.div`
  margin: 0.5rem 0;
`;

const FooterAction: React.FC<{
  className: string;
  link: any;
}> = ({ className, link }) => {
  return (
    <FooterActionStyle className={className}>
      <Actions nextJs Link={link} size="Small" actions={footerActionItems} />
    </FooterActionStyle>
  );
};

const FooterCopyrightStyle = styled.div`
  margin: 0.5rem 0;
  white-space: nowrap;
`;

const FooterCopyright: React.FC<{ className: string }> = ({ className }) => {
  return (
    <FooterCopyrightStyle className={className}>
      <p>&copy; 2020 CODEARTS</p>
    </FooterCopyrightStyle>
  );
};

const FooterBlockStyle = styled.div`
  display: block;
  width: 100%;
`;

const FooterInfoStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-between;
  white-space: nowrap;
  padding: 0 1rem;

  ${breakpointDown('is')`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}

  p {
    font-size: 0.75rem;
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

export interface PageFooterProps {
  className?: string;
}

const PageFooter: React.FC<PageFooterProps> = ({ className }) => {
  const ref = useRef<MenuRefObject>(null);

  return (
    <LayoutFooter>
      <FooterBlockStyle className={className}>
        <FooterMenu ref={ref} link={Link} />
        <FooterInfoStyle>
          <FooterAction className="right" link={Link} />
          <FooterCopyright className="left" />
        </FooterInfoStyle>
      </FooterBlockStyle>
    </LayoutFooter>
  );
};
export default PageFooter;
