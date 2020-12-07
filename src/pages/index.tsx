import React, { useEffect } from 'react';
// import { useRouter } from 'next/router';
import PageLayout from 'Layouts/PageLayout';
import Hero from 'components/Hero';
import styled from 'styled-components';
import { breakpointUp } from '@paljs/ui/breakpoints';
import Container from '@paljs/ui/Container';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import { Card } from '@paljs/ui/Card';

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

const ContainerContentStyle = styled.div`
  .card {
    height: 200px;
  }
`;

export default function Index() {
  // const router = useRouter();
  useEffect(() => {
    // router.push('/');
  }),
    [];

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
          <Row>
            <Col breakPoint={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Card className="card"> Test </Card>
            </Col>
          </Row>
        </Container>
      </ContainerContentStyle>
    </PageLayout>
  );
  // return <div />;
}
