import React from 'react';
import styled, { css } from 'styled-components';

const ContainerStyle = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.shadow};
  `}
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;

  word-break: normal;
  background: white;
  border-radius: 4px;

  .description {
    margin: 0.5rem 0;
  }
`;

interface PartProps {
  className?: string;
  title?: string;
}

const Part: React.FC<PartProps> = ({ className, title, children }) => {
  return (
    <ContainerStyle className={className}>
      <h3>{title}</h3>
      <div className="description">{children}</div>
    </ContainerStyle>
  );
};

export default Part;
