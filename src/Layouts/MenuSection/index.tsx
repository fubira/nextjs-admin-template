import React from 'react';
import styled from 'styled-components';

const MenuStyle = styled.div`
  margin: auto;
  padding: 0;
`;
const MenuSectionStyle = styled.div`
  margin: auto;
  padding: 1rem;
  max-width: 240px;
`;

interface MenuSectionProps {
  className?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ className, children }) => {
  return (
    <MenuStyle className={className}>
      <MenuSectionStyle> {children} </MenuSectionStyle>
    </MenuStyle>
  );
};

export default MenuSection;
