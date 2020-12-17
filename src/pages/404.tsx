import React from 'react';
import styled from 'styled-components';

import { useRouter } from 'next/router';
import { ButtonLink } from '@paljs/ui/Button';

import PageLayout from 'layouts/PageLayout';

const CardStyle = styled.div`
  margin: auto;
  align-items: center;
  text-align: center;
`;

const ErrorStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: #444;

  h1 {
    margin-bottom: 0.5rem;
    color: inherit;
  }
  a {
    margin: 3rem 0;
    max-width: 20rem;
  }
`;
export default function Error(): JSX.Element {
  const router = useRouter();
  return (
    <PageLayout title="404 Page Not Found">
      <ErrorStyle>
        <CardStyle>
          <h1>404 Page Not Found</h1>
          <small>指定されたページはありません</small>
          <ButtonLink fullWidth appearance="hero" onClick={() => router.push('/')} shape="Rectangle">
            トップにもどる
          </ButtonLink>
        </CardStyle>
      </ErrorStyle>
    </PageLayout>
  );
}
