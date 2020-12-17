import React from 'react';
// import { useRouter } from 'next/router';

import PageLayout from 'layouts/PageLayout';
import TextPart from 'components/TextPart';

export default function Index() {
  return (
    <PageLayout title="Landing">
      <h2>利用規約</h2>
      <TextPart title="項目1"> 内容1 </TextPart>
      <TextPart title="項目2"> 内容2 </TextPart>
      <TextPart title="項目3"> 内容3 </TextPart>
      <TextPart title="項目4"> 内容4 </TextPart>
    </PageLayout>
  );
  // return <div />;
}
