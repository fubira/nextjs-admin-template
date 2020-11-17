import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const LogoStyle = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 1.32rem;
  white-space: nowrap;
  a {
    text-decoration: none;
  }
`;

const Logo: React.FC<unknown> = () => {
  return (
    <LogoStyle>
      <Link href="/">
        <a> STARMIE </a>
      </Link>
    </LogoStyle>
  );
};
export default Logo;
