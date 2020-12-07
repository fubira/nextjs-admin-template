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
import { InferGetServerSidePropsType } from 'next';

import Progress from '@paljs/ui/ProgressBar';
import { EvaIcon } from '@paljs/ui/Icon';

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
  const res = await fetch(`${getApiUrl()}/api/item/latest`);
  const items = await res.json();

  return {
    props: {
      items,
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

  const ItemCards = props.items.map((item: any) => {
    const ItemCardsStyle = styled.span`
      .card {
        .image {
          position: relative;
          height: 200px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
          }
        }

        .image::before {
          background: rgba(255, 144, 32, 0.9);
          bottom: 0;
          color: #fff;
          content: 'New!';
          font-size: 15px;
          font-weight: 700;
          height: 23px;
          letter-spacing: 1px;
          line-height: 22px;
          position: absolute;
          text-align: center;
          width: 100%;
          z-index: 600;
        }

        .description {
          margin: 1rem 1rem;
          height: 50px;
          font-size: 16px;
          line-height: 20px;
        }
        .information {
          margin: 1rem 1rem;

          .time {
            display: flex;
            position: absolute;
            left: 1.8rem;
          }

          .money {
            display: flex;
            position: absolute;
            right: 1.8rem;
          }
        }
      }
    `;

    const style = { margin: '1rem' };
    return (
      <Col key={item.id} breakPoint={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <ItemCardsStyle>
          <Card className="card">
            <div className="image">
              <img src={item.image} alt={item.description} />
            </div>
            <div className="description"> {item.description} </div>
            <div className="information">
              <span className="time">
                <EvaIcon name="clock-outline" /> 1時間
              </span>
              <span className="money"> {Intl.NumberFormat().format(item.status.prices)} 円</span>
            </div>
            <Progress style={style} size="Medium" status="Primary" value={item.status.progress} displayValue />
          </Card>
        </ItemCardsStyle>
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
          <Row> {ItemCards} </Row>
        </Container>
      </ContainerContentStyle>
    </PageLayout>
  );
  // return <div />;
}
