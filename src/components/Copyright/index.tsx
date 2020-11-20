import React from 'react';
import styled from 'styled-components';

const CopyrightStyle = styled.div`
  display: inline;
  font-family: Montserrat, sans-serif;
  font-size: 1.32rem;
  white-space: nowrap;
  a {
    text-decoration: none;
  }
`;

const Copyright: React.FC<unknown> = () => {
  return (
    <CopyrightStyle>
      <p>&copy; CODEARTS 2020</p>
    </CopyrightStyle>
  );
};
export default Copyright;
