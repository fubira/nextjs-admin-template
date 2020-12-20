import React from 'react';
import styled from 'styled-components';

import { InferGetServerSidePropsType, GetServerSideProps } from 'next';

import { breakpointUp } from '@paljs/ui/breakpoints';
import Container from '@paljs/ui/Container';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';

import PageLayout from 'layouts/PageLayout';
import Hero from 'components/Hero';
import ProjectCard from 'components/ProjectCard';

const HeroContentStyle = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1000px;

  padding: 120px 0;

  ${breakpointUp('sm')` padding: 150px 0; `}
  ${breakpointUp('md')` padding: 180px 0; `}
  ${breakpointUp('lg')` padding: 210px 0; `}

  .slogan {
    margin-bottom: 0.4em;
    white-space: nowrap;

    font-size: 18px;
    font-weight: 700;
    line-height: 1.2em;

    ${breakpointUp('sm')` font-size: 24px; `}
    ${breakpointUp('md')` font-size: 30px; `}
    ${breakpointUp('lg')` font-size: 36px; `}
  }

  .message {
    margin-bottom: 0.4em;
    white-space: nowrap;

    font-size: 14px;
    font-weight: 400;
    line-height: 1em;

    ${breakpointUp('sm')` font-size: 16px; `}
    ${breakpointUp('md')` font-size: 18px; `}
    ${breakpointUp('lg')` font-size: 20px; `}
  }
`;

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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${getApiUrl()}/api/project/latest`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};

export default function Index(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const ProjectCards = props.projects.map((project: any) => {
    return (
      <Col key={project.id} breakPoint={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <ProjectCard project={project} />
      </Col>
    );
  });

  return (
    <PageLayout title="Landing">
      <Hero src="images/title.jpg">
        <HeroContentStyle>
          <div className="slogan">
            クラウドファンディングでみつける
            <br />
            新しい未来のかたち。
          </div>
          <div className="message"> なんとなくそれっぽいメッセージ領域 </div>
        </HeroContentStyle>
      </Hero>
      <ContainerContentStyle>
        <Container>
          <Row> {ProjectCards} </Row>
        </Container>
      </ContainerContentStyle>
    </PageLayout>
  );
  // return <div />;
}
