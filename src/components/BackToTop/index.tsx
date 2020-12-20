import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { EvaIcon } from '@paljs/ui/Icon';

const BackToTopStyle = styled.div<{ show?: boolean }>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: sticky;
  z-index: 1000;
  width: 60px;
  height: 60px;
  bottom: 10px;
  margin: auto;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  animation: fadeIn 0.2s;
  transition: opacity 0.2s;
  opacity: 0.8;

  span {
    height: 1.1em;
    font-family: Montserrat, sans-serif;
    font-size: 1.42rem;
    font-weight: 700;
    white-space: nowrap;
  }

  .scrollTop:hover {
    opacity: 1;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

interface BackToTopProps {
  className?: string;
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const BackToTop: React.FC<BackToTopProps> = ({ className }) => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    }
    if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', checkScrollTop, { passive: true });
    return () => {
      document.removeEventListener('scroll', checkScrollTop);
    };
  });

  return (
    <BackToTopStyle className={className} show={showScroll} onClick={scrollToTop}>
      <EvaIcon name="arrow-ios-upward" />
    </BackToTopStyle>
  );
};
export default BackToTop;
