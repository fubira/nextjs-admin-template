import React from 'react';
import styled from 'styled-components';

import PageLayout from 'layouts/PageLayout';
import BasicContentSection from 'layouts/BasicContentSection';
import InfoPageMenu from 'components/InfoPageMenu';
import TextPart from 'components/TextPart';

const ContentStyle = styled.div`
  margin: auto;
  padding: 2rem;
  min-width: 320px;
`;

export default function Terms() {
  return (
    <PageLayout title="プライバシーポリシー">
      <BasicContentSection sidemenu={<InfoPageMenu />}>
        <ContentStyle>
          <h2>利用規約</h2>
          <TextPart title="項目1"> 内容1 </TextPart>
          <TextPart title="項目2"> 内容2 </TextPart>
          <TextPart title="項目3"> 内容3 </TextPart>
          <TextPart title="項目4"> 内容4 </TextPart>
        </ContentStyle>
      </BasicContentSection>
    </PageLayout>
  );
}
