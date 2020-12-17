import React from 'react';
import styled, { css } from 'styled-components';

const ContainerStyle = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.shadow};
    background: ${theme.backgroundBasicColor1};
  `}

  margin: 1.5rem 0;
  padding: 1.5rem;

  word-break: normal;
  border-radius: 4px;

  .description {
    margin: 0.5rem 0;
  }
`;

interface TextPartProps {
  className?: string;
  title?: string;
}

const TextPart: React.FC<TextPartProps> = ({ className, title, children }) => {
  return (
    <ContainerStyle className={className}>
      <h3>{title}</h3>
      <div className="description">{children}</div>
    </ContainerStyle>
  );
};

export default TextPart;
