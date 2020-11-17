import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { LayoutHeader } from '@paljs/ui/Layout';
import { Actions } from '@paljs/ui/Actions';
import ContextMenu from '@paljs/ui/ContextMenu';
import User from '@paljs/ui/User';
import { breakpointDown } from '@paljs/ui/breakpoints';
import { InputGroup } from '@paljs/ui/Input';
import { EvaIcon } from '@paljs/ui/Icon';

const InputStyled = styled(InputGroup)`
  margin: auto;
`;

const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${breakpointDown('sm')`
    .right{
      display: none;
    }
  `}
  .right > div {
    height: auto;
    display: flex;
    align-content: center;
  }
  .logo {
    font-size: 1.35rem;
    white-space: nowrap;
    text-decoration: none;
  }
  .left {
    display: flex;
    align-items: center;
  }
`;

const Header: React.FC<unknown> = () => {
  const router = useRouter();

  return (
    <LayoutHeader fixed>
      <HeaderStyle>
        <Actions
          size="Medium"
          actions={[
            {
              icon: { name: 'menu-outline' },
              url: {
                onClick: () => void {},
              },
            },
            {
              content: (
                <Link href="/">
                  <a className="logo"> STARMIE </a>
                </Link>
              ),
            },
            {
              content: (
                <InputStyled fullWidth status="Info" size="Small">
                  <EvaIcon name="search" />
                  <input type="text" placeholder="Size Small" />
                </InputStyled>
              ),
            },
          ]}
        />
        <Actions
          size="Small"
          className="right"
          actions={[
            {
              content: (
                <Link href="/">
                  <a> FAQ </a>
                </Link>
              ),
            },
            {
              content: (
                <Link href="/">
                  <a> ヘルプ </a>
                </Link>
              ),
            },
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
