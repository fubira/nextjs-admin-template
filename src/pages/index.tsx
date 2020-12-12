import React, { useEffect } from 'react';
import { InferGetServerSidePropsType } from 'next';

// import { useRouter } from 'next/router';
import PageLayout from 'Layouts/PageLayout';
import Hero from 'components/Hero';
import ProjectCard from 'components/ProjectCard';
import styled from 'styled-components';
import { breakpointUp } from '@paljs/ui/breakpoints';
import Container from '@paljs/ui/Container';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';

const HeroContentStyle = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1000px;

  padding-top: 120px;
  padding-bottom: 130px;

  ${breakpointUp('sm')`
    padding-top: 150px;
    padding-bottom: 160px;
  `}

  ${breakpointUp('md')`
    padding-top: 180px;
    padding-bottom: 190px;
  `}
  ${breakpointUp('lg')`
    padding-top: 210px;
    padding-bottom: 230px;
  `}

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

export async function getServerSideProps() {
  const res = await fetch(`${getApiUrl()}/api/project/latest`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
}

export default function Index(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(props);
  // const router = useRouter();
  useEffect(() => {
    // router.push('/');
  }),
    [];

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
