import React from 'react';
import styled from 'styled-components';

import { Card } from '@paljs/ui/Card';

const CardCompanyInfoStyle = styled.div`
  margin: 1.5rem;
  img {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

interface CompanyCardProps {
  className?: string;
  company: {
    name: string;
    description: string;
    image: string;
  };
}

const CompanyCard: React.FC<CompanyCardProps> = ({ className, company }) => {
  return (
    <Card className={className}>
      <CardCompanyInfoStyle> {company.name} </CardCompanyInfoStyle>
    </Card>
  );
};
export default CompanyCard;
