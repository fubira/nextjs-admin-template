import React from 'react';
// import { useRouter } from 'next/router';
import PageLayout from 'Layouts/PageLayout';
import Part from '../components/Part/index';
import ContentSection from 'Layouts/ContentSection';

export default function Index() {
  return (
    <PageLayout title="Landing">
      <ContentSection>
        <h2>利用規約</h2>
        <Part title="項目1"> 内容1 </Part>
        <Part title="項目2"> 内容2 </Part>
        <Part title="項目3"> 内容3 </Part>
        <Part title="項目4"> 内容4 </Part>
      </ContentSection>
    </PageLayout>
  );
  // return <div />;
}
