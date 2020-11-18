import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { LayoutHeader } from '@paljs/ui/Layout';
import { Actions } from '@paljs/ui/Actions';
import ContextMenu from '@paljs/ui/ContextMenu';
import User from '@paljs/ui/User';
import { breakpointDown } from '@paljs/ui/breakpoints';

import Logo from '../../components/Logo';
import SearchInput from '../../components/SearchInput';

const StickyHeaderStyle = styled.div`
  position: sticky;
  top: 0px;
  z-index: 1000;
`;

const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  white-space: nowrap;
  justify-content: space-between;

  .right > div {
    align-content: center;
  }
  .left > div {
    align-content: center;
  }

  ${breakpointDown('sm')`
    .input {
      display: none;
    }
  `}
`;

const StickyHeader: React.FC<unknown> = () => {
  const router = useRouter();

  return (
    <StickyHeaderStyle>
      <LayoutHeader className="header">
        <HeaderStyle>
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
                    <User image="url('/avatar/avatar-04.png')" color="#440088" shape="Round" size="Medium" />
                  </ContextMenu>
                ),
              },
            ]}
          />
        </HeaderStyle>
      </LayoutHeader>
    </StickyHeaderStyle>
  );
};
export default StickyHeader;
