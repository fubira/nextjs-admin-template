import React from 'react';
import styled from 'styled-components';

const HeroStyle = styled.div`
  position: relative;
  margin-bottom: 48px;
`;

const HeroPictureStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  picture {
    display: block;
    height: 100%;
    position: relative;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const HeroChildrenStyle = styled.div`
  position: relative;
`;

interface TopImageProps {
  src?: string;
}

const Hero: React.FC<TopImageProps> = ({ src, children }) => {
  return (
    <HeroStyle>
      <HeroPictureStyle>
        <picture>
          <img src={src} />
        </picture>
      </HeroPictureStyle>
      <HeroChildrenStyle> {children} </HeroChildrenStyle>
    </HeroStyle>
  );
};
export default Hero;
