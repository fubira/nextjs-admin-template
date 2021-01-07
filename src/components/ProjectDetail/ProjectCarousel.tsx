import React from 'react';
import styled from 'styled-components';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

interface ProjectCarouselProps {
  className?: string;
  images: Array<string>;
}

const CarouselStyle = styled.div`
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
  .thumbnail {
  }
`;

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ className, images }) => {
  return (
    <CarouselStyle className={className}>
      <Carousel showArrows showStatus={false} showIndicators={false}>
        {images.map((src: string, index: number) => {
          return <img key={index} src={src} />;
        })}
      </Carousel>
    </CarouselStyle>
  );
};
export default ProjectCarousel;
