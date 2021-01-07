import React from 'react';
import styled from 'styled-components';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

interface SlideProps {
  className?: string;
  images: Array<string>;
}

const SlideStyle = styled.div`
  display: inline-block;
  width: 100%;

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  .carousel .slide {
    padding: 0;
  }
  .carousel .thumb {
    padding: 4px;
  }
  .carousel .thumbs-wrapper {
    margin: 1rem;
  }
`;

const Slide: React.FC<SlideProps> = ({ className, images }) => {
  return (
    <SlideStyle className={className}>
      <Carousel showArrows={true} showStatus={false}>
        {images.map((src: string, index: number) => {
          return <img key={index} src={src} />;
        })}
      </Carousel>
    </SlideStyle>
  );
};
export default Slide;
