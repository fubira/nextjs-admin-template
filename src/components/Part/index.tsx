import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
  margin-bottom: 40px;
  word-break: normal;
  background: white;
  border-radius: 4px;
  border-bottom: 2px solid #e7e7e7;
  padding: 20px;
`;

interface PartProps {
  className?: string;
  title?: string;
}

const Part: React.FC<PartProps> = ({ className, title, children }) => {
  return (
    <ContainerStyle className={className}>
      <h3>{title}</h3>
      <p>{children}</p>
    </ContainerStyle>
  );
};

export default Part;
