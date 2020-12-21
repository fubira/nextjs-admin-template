import React from 'react';
import styled from 'styled-components';

import { Card } from '@paljs/ui/Card';
import User from '@paljs/ui/User';

const CardCompanyInfoStyle = styled.div`
  margin: 0.5rem 1.5rem 1.5rem;
  img {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

const CardCompanyUserStyle = styled.div`
  margin: 1rem 1rem;

  .user-picture {
    backgound-color: white;
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
      <CardCompanyUserStyle>
        <User image="url('/avatar/avatar-14.png')" color="#440088" shape="Round" size="Giant" name={company.name} />
      </CardCompanyUserStyle>
      <CardCompanyInfoStyle>
        <p>{company.description}</p>
      </CardCompanyInfoStyle>
    </Card>
  );
};
export default CompanyCard;
