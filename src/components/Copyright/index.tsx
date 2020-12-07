import React from 'react';
import styled from 'styled-components';

const CopyrightStyle = styled.div`
  white-space: nowrap;
`;

interface CopyrightProps {
  className?: string;
}

const Copyright: React.FC<CopyrightProps> = ({ className }) => {
  return (
    <CopyrightStyle className={className}>
      <p>&copy; 2020 CODEARTS</p>
    </CopyrightStyle>
  );
};
export default Copyright;
