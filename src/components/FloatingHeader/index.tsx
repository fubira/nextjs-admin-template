import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { LayoutHeader } from '@paljs/ui/Layout';
import { Actions } from '@paljs/ui/Actions';
import ContextMenu from '@paljs/ui/ContextMenu';
import User from '@paljs/ui/User';
import { breakpointDown } from '@paljs/ui/breakpoints';

import Logo from '../Logo';
import SearchInput from '../SearchInput';

const FloatingHeaderStyle = styled.div`
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
`;

const FloatingHeader: React.FC<unknown> = () => {
  const router = useRouter();

  return (
    <LayoutHeader fixed>
      <FloatingHeaderStyle>
        <Actions
          size="Medium"
          className="left"
          actions={[
            {
              content: <Logo />,
            },
            {
              content: <SearchInput />,
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
                  <User
                    image="url('/avatar/avatar-04.png')"
                    color="#440088"
                    shape="SemiRound"
                    name="テストユーザ"
                    title="一般会員"
                    size="Medium"
                  />
                </ContextMenu>
              ),
            },
          ]}
        />
      </FloatingHeaderStyle>
    </LayoutHeader>
  );
};
export default FloatingHeader;
