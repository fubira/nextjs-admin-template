import React, { useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Menu, MenuRefObject } from '@paljs/ui/Menu';
import { MenuItemType } from '@paljs/ui/types';

import PageLayout from 'Layouts/PageLayout';
import ContentSection from 'Layouts/ContentSection';
import MenuSection from 'Layouts/MenuSection/index';
import Part from '../components/Part/index';

const FlexContentStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentStyle = styled.div`
  min-width: 600px;

  dl {
    display: table;
    position: relative;
    width: 100%;
  }

  dt,
  dd {
    display: table-cell;
    vertical-align: middle;
    line-height: 1.5rem;

    padding: 16px 0px 16px 32px;
  }

  dt {
    float: left;
    width: 160px;
  }

  ul {
    padding-left: 1.5rem;
  }
`;
const SideMenuStyle = styled.div`
  width: 180px;
  margin: 1rem;
`;
const leftMenuItems: MenuItemType[] = [
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

export default function Index() {
  const router = useRouter();
  const menuRef = useRef<MenuRefObject>(null);
  console.log(router.pathname);

  return (
    <PageLayout title="Landing">
      <FlexContentStyle>
        <SideMenuStyle>
          <MenuSection>
            <Menu nextJs ref={menuRef} Link={Link} currentPath={router.pathname} items={leftMenuItems} />
          </MenuSection>
        </SideMenuStyle>

        <ContentStyle>
          <ContentSection>
            <h2>運営会社</h2>
            <Part>
              <dl>
                <div>
                  <dt> 運営会社 </dt>
                  <dd> 株式会社 仮 </dd>
                </div>

                <div>
                  <dt> 設立 </dt>
                  <dd> 2020年12月15日 </dd>
                </div>

                <div>
                  <dt> 資本金 </dt>
                  <dd> 1,234万円 </dd>
                </div>

                <div>
                  <dt> 所在地 </dt>
                  <dd>
                    <p>郵便番号123-4567</p>
                    <p>東京都千代田区1-1</p>
                  </dd>
                </div>

                <div>
                  <dt> 事業内容 </dt>
                  <dd>
                    <ul>
                      <li>ソフトウェア開発</li>
                      <li>ソフトウェア開発</li>
                      <li>ソフトウェア開発</li>
                    </ul>
                  </dd>
                </div>

                <div>
                  <dt> 役員 </dt>
                  <dd>
                    <p>代表取締役社長</p>
                    <p>取締役</p>
                    <p>取締役</p>
                  </dd>
                  <dd>
                    <p>鈴木 二郎</p>
                    <p>田中 将太</p>
                    <p>西出 輝裕</p>
                  </dd>
                </div>
              </dl>
            </Part>
          </ContentSection>
        </ContentStyle>
      </FlexContentStyle>
    </PageLayout>
  );
  // return <div />;
}
