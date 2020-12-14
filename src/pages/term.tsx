import React from 'react';
// import { useRouter } from 'next/router';
import PageLayout from 'Layouts/PageLayout';
import Part from '../components/Part/index';
import ContentSection from 'Layouts/ContentSection';

export default function Index() {
  return (
    <PageLayout title="Landing">
      <ContentSection>
        <h3>利用規約</h3>
        <Part title="利用規約1"> 利用規約1 </Part>
        <Part title="利用規約2"> 利用規約2 </Part>
        <Part title="利用規約3"> 利用規約3 </Part>
        <Part title="利用規約4"> 利用規約4 </Part>
      </ContentSection>
    </PageLayout>
  );
  // return <div />;
}
