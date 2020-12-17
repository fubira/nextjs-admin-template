import React from 'react';
import styled from 'styled-components';

import PageLayout from 'layouts/PageLayout';
import BasicContentSection from 'layouts/BasicContentSection';
import TextPart from 'components/TextPart';
import InfoPageMenu from 'components/InfoPageMenu';
import { breakpointDown } from '@paljs/ui/breakpoints';

const TableStyle = styled.div`
  margin: auto;
  padding: 2rem;
  min-width: 320px;

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
  return (
    <PageLayout title="Landing">
      <BasicContentSection sidemenu={<InfoPageMenu />}>
        <TableStyle>
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
          </TextPart>
        </TableStyle>
      </BasicContentSection>
    </PageLayout>
  );
}
