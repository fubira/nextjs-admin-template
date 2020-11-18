import React, { useEffect } from 'react';
// import { useRouter } from 'next/router';
import PageLayout from 'Layouts/PageLayout';
import Hero from 'components/Hero';
import styled from 'styled-components';
import { breakpointUp } from '@paljs/ui/breakpoints';

const HeroContentStyle = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1000px;

  padding-top: 90px;
  padding-bottom: 100px;

  ${breakpointUp('sm')`
    padding-top: 130px;
    padding-bottom: 140px;
  `}

  ${breakpointUp('md')`
    padding-top: 180px;
    padding-bottom: 190px;
  `}
  ${breakpointUp('lg')`
    padding-top: 220px;
    padding-bottom: 240px;
  `}

  .slogan {
    margin-bottom: 0.4em;
    white-space: nowrap;

    font-size: 18px;
    font-weight: 700;
    line-height: 1.2em;

    ${breakpointUp('sm')` font-size: 22px; `}
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
    </PageLayout>
  );
  // return <div />;
}
