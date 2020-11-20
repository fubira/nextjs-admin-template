import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const LogoStyle = styled.div`
  span {
    height: 1.1em;
    font-family: Montserrat, sans-serif;
    font-size: 1.42rem;
    font-weight: 700;
    white-space: nowrap;
  }

  a {
    text-decoration: none;
  }
`;

interface LogoProps {
  className?: string;
  href?: string;
  title?: string;
}

const Logo: React.FC<LogoProps> = ({ className, href, img, title }) => {
  return (
    <LogoStyle className={className}>
      <Link href={href || '/'}>
        <a> {title && <span>{title}</span>} </a>
      </Link>
    </LogoStyle>
  );
};
export default Logo;
