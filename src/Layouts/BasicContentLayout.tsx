import React from 'react';
import styled from 'styled-components';

import { breakpointDown } from '@paljs/ui/breakpoints';

const ContentSectionStyle = styled.div`
  display: flex;
  max-width: 1020px;
  margin: 0 auto;
`;

const SideMenuStyle = styled.div`
  ${breakpointDown('sm')`
    display: none;
  `}
`;

const ContentSizeStyle = styled.div`
  min-width: 320px;
  width: 100%;
`;

interface ContentSectionProps {
  className?: string;
  sidemenu?: React.ReactNode;
}

const BasicContentLayout: React.FC<ContentSectionProps> = ({ children, className, sidemenu }) => {
  return (
    <ContentSectionStyle className={className}>
      {sidemenu && <SideMenuStyle>{sidemenu}</SideMenuStyle>}
      <ContentSizeStyle> {children} </ContentSizeStyle>
    </ContentSectionStyle>
  );
};

export default BasicContentLayout;
