import React from 'react';
// import { useRouter } from 'next/router';
import styled from 'styled-components';

import PageLayout from 'layouts/PageLayout';
import ContentLayout from 'layouts/BasicContentLayout';
import TextPart from 'components/TextPart';
import InfoPageMenu from 'components/InfoPageMenu';

const ContentStyle = styled.div`
  padding: 2rem;
`;

export default function Privacy() {
  return (
    <PageLayout title="プライバシーポリシー">
      <ContentLayout sidemenu={<InfoPageMenu />}>
        <ContentStyle>
          <h2>プライバシーポリシー</h2>
          <TextPart title="項目1"> 内容1 </TextPart>
          <TextPart title="項目2"> 内容2 </TextPart>
          <TextPart title="項目3"> 内容3 </TextPart>
          <TextPart title="項目4"> 内容4 </TextPart>
        </ContentStyle>
      </ContentLayout>
    </PageLayout>
  );
}
