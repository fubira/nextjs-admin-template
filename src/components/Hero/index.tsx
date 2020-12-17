import React from 'react';
import styled from 'styled-components';

const HeroStyle = styled.div`
  position: relative;
  margin-bottom: 3rem;
`;

const HeroContentStyle = styled.div<{ image?: string }>`
  ${({ image }) => (image ? `background: url(${image}) 50% 50% / cover no-repeat` : '')};
  position: relative;
`;

interface HeroProps {
  className?: string;
  src?: string;
}
const Hero: React.FC<HeroProps> = ({ className, src, children }) => {
  return (
    <HeroStyle className={className}>
      <HeroContentStyle image={src}>{children}</HeroContentStyle>
    </HeroStyle>
  );
};
export default Hero;
