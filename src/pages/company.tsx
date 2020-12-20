import React from 'react';
import styled from 'styled-components';

import PageLayout from 'layouts/PageLayout';
import ContentLayout from 'layouts/BasicContentLayout';
import TextPart from 'components/TextPart';
import InfoPageMenu from 'components/InfoPageMenu';
import { breakpointDown } from '@paljs/ui/breakpoints';
import { useRouter } from 'next/router';

const ContentStyle = styled.div`
  margin: auto;
  padding: 2rem;

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
    white-space: nowrap;
  }

  dt {
    float: left;
    width: 144px;
    padding: 12px 0px 0px 24px;
    font-weight: 700;

    ${breakpointDown('sm')`
      width: 100%;
    `}
  }

  dd {
    padding: 12px 0px 12px 36px;
  }

  ul {
    padding-left: 1.5rem;
  }
`;

export default function Company() {
  const router = useRouter();

  return (
    <PageLayout title="会社概要">
      <ContentLayout sidemenu={<InfoPageMenu currentPath={router.pathname} />}>
        <ContentStyle>
          <h2>運営会社</h2>
          <TextPart className="text-part">
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
                    <li>ハードウェア開発</li>
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
                  <p>鈴木 十朗</p>
                  <p>松坂 太輔</p>
                  <p>梵 心英</p>
                </dd>
              </div>
            </dl>
          </TextPart>
        </ContentStyle>
      </ContentLayout>
    </PageLayout>
  );
}
