import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
  display: flex;
  height: 0.8rem;
  margin: 1rem;
  align-items: center;
`;

const ProgressAreaStyle = styled.div`
  height: 100%;
  width: 100%;
`;

const ProgressBackgroundStyle = styled.div`
  height: 100%;
  width: 100%;
  background-color: #dfdfef;
  border-radius: 50px;
  text-align: right;
`;

const ProgressFrontStyle = styled.div<{ bgcolor?: string; value?: number }>`
  height: 100%;
  max-width: 100%;
  width: ${({ value }) => (value ? `${value}%` : 0)};
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : '#8080ff')};
  border-radius: inherit;
`;

const TextStyle = styled.span`
  padding-left: 0.6rem;
  color: inherit;
`;

interface ProgressProps {
  value?: number;
}

const Progress: React.FC<ProgressProps> = ({ value }) => {
  const bgcolor = value && value >= 100 ? '#40ef60' : '#8080ff';

  return (
    <ContainerStyle>
      <ProgressAreaStyle>
        <ProgressBackgroundStyle>
          <ProgressFrontStyle bgcolor={bgcolor} value={value}></ProgressFrontStyle>
        </ProgressBackgroundStyle>
      </ProgressAreaStyle>
      <TextStyle>{`${value ? value : 0}%`}</TextStyle>
    </ContainerStyle>
  );
};

export default Progress;
