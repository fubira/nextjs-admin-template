import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
  margin: auto;
  padding: 0;
`;
const ContentSectionStyle = styled.div`
  margin: auto;
  padding: 2rem;
  min-width: 240px;
  max-width: 792px;
`;

interface ContentSectionProps {
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ className, children }) => {
  return (
    <ContainerStyle className={className}>
      <ContentSectionStyle> {children} </ContentSectionStyle>
    </ContainerStyle>
  );
};

export default ContentSection;
