import React, { useEffect } from 'react';
import PageLayout from 'Layouts/PageLayout';
import styled from 'styled-components';
import Container from '@paljs/ui/Container';
import Row from '@paljs/ui/Row';
import { InferGetServerSidePropsType, NextPageContext } from 'next';

const ContainerContentStyle = styled.span`
  .card {
    img {
      height: 200px;
      object-fit: cover;
    }
  }
`;

function getApiUrl() {
  let url = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';
  if (!url.startsWith('http')) {
    url = `https://${url}`;
  }
  return url;
}

export async function getServerSideProps(context: NextPageContext) {
  const { id } = context.query;
  const res = await fetch(`${getApiUrl()}/api/project/get?id=${id}`);
  const project = await res.json();

  return {
    props: {
      project,
    },
  };
}

export default function Index(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const router = useRouter();
  useEffect(() => {
    // router.push('/');
  }),
    [];

  console.log(props.project.id);
  return (
    <PageLayout title="Landing">
      <ContainerContentStyle>
        <Container>
          <Row></Row>
        </Container>
      </ContainerContentStyle>
    </PageLayout>
  );
  // return <div />;
}
