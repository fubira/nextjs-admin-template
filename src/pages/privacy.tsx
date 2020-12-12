import React from 'react';
// import { useRouter } from 'next/router';
import PageLayout from 'Layouts/PageLayout';
import Part from '../components/Part/index';
import ContentSection from 'Layouts/ContentSection';

export default function Index() {
  return (
    <PageLayout title="Landing">
      <ContentSection>
        <h3>プライバシーポリシー</h3>
        <Part title="プライバシーポリシー1"> プライバシーポリシー1 </Part>
        <Part title="プライバシーポリシー2"> プライバシーポリシー2 </Part>
        <Part title="プライバシーポリシー3"> プライバシーポリシー3 </Part>
        <Part title="プライバシーポリシー4"> プライバシーポリシー4 </Part>
      </ContentSection>
    </PageLayout>
  );
  // return <div />;
}
