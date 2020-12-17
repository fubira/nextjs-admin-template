import React, { useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Menu, MenuRefObject } from '@paljs/ui/Menu';
import { MenuItemType } from '@paljs/ui/types';

const infoPageMenuItems: MenuItemType[] = [
  {
    title: '運営会社',
    link: { href: '/company' },
  },
  {
    title: '利用規約',
    link: { href: '/term' },
  },
  {
    title: 'プライバシーポリシー',
    link: { href: '/privacy' },
  },
];

const InfoPageMenuStyle = styled.div`
  min-width: 150px;
  word-wrap: nowrap;
  margin: 1rem;
`;

interface InfoPageMenuProps {
  className?: string;
}

const InfoPageMenu: React.FC<InfoPageMenuProps> = ({ className }) => {
  const router = useRouter();
  const menuRef = useRef<MenuRefObject>(null);

  return (
    <InfoPageMenuStyle className={className}>
      <Menu nextJs ref={menuRef} Link={Link} currentPath={router.pathname} items={infoPageMenuItems} />
    </InfoPageMenuStyle>
  );
};

export default InfoPageMenu;
