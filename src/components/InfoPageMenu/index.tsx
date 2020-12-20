import React, { useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

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
  menuRef?: React.RefObject<MenuRefObject>;
  currentPath: string;
}

const InfoPageMenu: React.FC<InfoPageMenuProps> = ({ className, currentPath }) => {
  const menuRef = useRef<MenuRefObject>(null);

  /* NOTE
    @pal.js/Menuのselected判定では、Menu自身以外から該当するURLに遷移した場合に
    正しく現在地を表示しないので強制的に設定する
  */
  infoPageMenuItems.forEach((item) => {
    item.selected = item.link && item.link.href === currentPath;
  });

  return (
    <InfoPageMenuStyle className={className}>
      <Menu nextJs ref={menuRef} Link={Link} currentPath={currentPath} items={infoPageMenuItems} />
    </InfoPageMenuStyle>
  );
};

export default InfoPageMenu;
