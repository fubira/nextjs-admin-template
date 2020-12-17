import React from 'react';
import styled from 'styled-components';

const HeroStyle = styled.div`
  position: relative;
  margin-bottom: 48px;
`;

const HeroChildrenStyle = styled.div<{ src?: string }>`
  ${({ src }) => (src ? `background: url(${src}) 50% 50% / cover no-repeat` : '')};
  position: relative;
`;

interface HeroProps {
  className?: string;
  src?: string;
}
const Hero: React.FC<HeroProps> = ({ className, src, children }) => {
  return (
    <HeroStyle className={className}>
      <HeroChildrenStyle src={src}>{children}</HeroChildrenStyle>
    </HeroStyle>
  );
};
export default Hero;
