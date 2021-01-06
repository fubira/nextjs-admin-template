import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

interface ProjectCarouselProps {
  className?: string;
  images: Array<string>;
}

const CarouselStyle = styled.div`
  .thumbnail {
  }
`;

const ThumbnailImage = styled.img`
  width: 72px;
`;

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ className, images }) => {
  const [value, setValue] = useState(0);
  const onChange = (value: number) => {
    setValue(value);
  };

  return (
    <CarouselStyle className={className}>
      <Carousel arrows infinite value={value} onChange={onChange}>
        {images.map((src: string, index: number) => {
          return <img key={index} src={src} />;
        })}
      </Carousel>
      <Dots
        thumbnails={images.map((src: string, index: number) => {
          return <ThumbnailImage key={index} className="thumbnail" src={src} />;
        })}
        value={value}
        onChange={onChange}
      />
    </CarouselStyle>
  );
};
export default ProjectCarousel;
