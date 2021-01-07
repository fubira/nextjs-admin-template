import React from 'react';
import styled from 'styled-components';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import Container from '@paljs/ui/Container';

import PageLayout from 'layouts/PageLayout';
import ProjectDetail from 'components/ProjectDetail/index';

const ContainerContentStyle = styled.span``;

function getApiUrl() {
  let url = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';
  if (!url.startsWith('http')) {
    url = `https://${url}`;
  }
  return url;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${getApiUrl()}/api/project/get?id=${id}`);
  const project = await res.json();

  return {
    props: {
      project,
    },
  };
};

export default function Project(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // console.log(props);
  return (
    <PageLayout title="Landing">
      <ContainerContentStyle>
        <Container>
          <ProjectDetail project={props.project} />
        </Container>
      </ContainerContentStyle>
    </PageLayout>
  );
  // return <div />;
}
