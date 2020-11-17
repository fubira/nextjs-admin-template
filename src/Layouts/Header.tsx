import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { LayoutHeader } from '@paljs/ui/Layout';
import { Actions } from '@paljs/ui/Actions';
import ContextMenu from '@paljs/ui/ContextMenu';
import User from '@paljs/ui/User';
import { breakpointDown } from '@paljs/ui/breakpoints';
import Search from 'components/Search';

const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${breakpointDown('sm')`
    .input {
      display: none;
    }
  `}
  .right > div {
    height: auto;
    display: flex;
    white-space: nowrap;
    align-content: center;
  }
  .left > div {
    display: flex;
    align-items: center;
  }
  .logo {
    font-family: Montserrat, sans-serif;
    font-size: 1.25rem;
    white-space: nowrap;
    text-decoration: none;
  }
`;

const Header: React.FC<unknown> = () => {
  const router = useRouter();

  return (
    <LayoutHeader fixed>
      <HeaderStyle>
        <Actions
          size="Medium"
          className="left"
          actions={[
            {
              content: (
                <Link href="/">
                  <a className="logo"> STARMIE </a>
                </Link>
              ),
            },
            {
              content: <Search />,
            },
          ]}
        />
        <Actions
          size="Small"
          className="right"
          actions={[
            {
              content: (
                <ContextMenu
                  nextJs
                  style={{ cursor: 'pointer' }}
                  placement="bottom"
                  currentPath={router.pathname}
                  items={[
                    { title: 'Profile', link: { href: '/modal-overlays/tooltip' } },
                    { title: 'Log out', link: { href: '/logout' } },
                  ]}
                  Link={Link}
                >
                  <User image="url('/avatar/avatar-04.png')" name="テストユーザ" title="一般会員" size="Medium" />
                </ContextMenu>
              ),
            },
          ]}
        />
      </HeaderStyle>
    </LayoutHeader>
  );
};
export default Header;
