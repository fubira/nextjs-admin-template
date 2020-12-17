import React from 'react';
// import { useRouter } from 'next/router';

import PageLayout from 'layouts/PageLayout';
import ContentSection from 'layouts/ContentSection';
import TextPart from 'layouts/TextPart/index';

export default function Index() {
  return (
    <PageLayout title="Landing">
      <ContentSection>
        <h2>プライバシーポリシー</h2>
        <TextPart title="項目1"> 内容1 </TextPart>
        <TextPart title="項目2"> 内容2 </TextPart>
        <TextPart title="項目3"> 内容3 </TextPart>
        <TextPart title="項目4"> 内容4 </TextPart>
      </ContentSection>
    </PageLayout>
  );
  // return <div />;
}
